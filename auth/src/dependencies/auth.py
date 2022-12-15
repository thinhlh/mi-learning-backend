from datetime import timedelta
import datetime
from jose import jwt
from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2
from src.models.token import Token
from sqlalchemy.orm import Session
from src.models import user
from src.crud.user import UserCRUD
from src.router import user
from src.models.user import User
from src.schemas.user import UserOut
from src.config.database import get_db
from src.models.token_payload import TokenPayload

user_crud = UserCRUD()
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
TOKEN_EXPIRE_MINUTES = 60


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="login",
    description="Auth Scheme"
)


def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme),):
    user = user_crud.get_user_by_id(db=db, id=token)
    if not user:
        raise HTTPException(404, 'User not found!')
    return user


def authenticate_user(email: str, password: str, db: Session = Depends(get_db)):
    user = user_crud.get_user_by_email(email=email, db=db)

    if not user:
        return False
    else:
        if user.password != password:
            return False
        else:
            return user


def create_token(payload: TokenPayload) -> str:
    token_expire = timedelta(minutes=TOKEN_EXPIRE_MINUTES)

    to_encode = payload.copy()
    expire = datetime.utcnow() + token_expire

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
