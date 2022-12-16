from datetime import timedelta
import datetime
from jose import jwt, JWTError
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2, SecurityScopes
from src.models.token import Token
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from src.models import user
from src.crud.user import UserCRUD
from src.router import user
from src.models.user import User
from src.schemas.user import UserOut
from src.config.database import get_db
from src.models.token_payload import TokenPayload
from ..config.settings import settings

user_crud = UserCRUD()

TOKEN_EXPIRE_MINUTES = 60


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="login",
    description="Auth Scheme",
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return plain_password == hashed_password
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_current_user(
        security_scopes: SecurityScopes,
        db: Session,
        token: str = Depends(oauth2_scheme)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(
            token,
            settings.secret_key,
            algorithms=[settings.algorithm]
        )

        id = payload.get("sub")
        token_scopes = payload.get("scopes", [])

        if not id:
            raise credentials_exception
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token credential",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user = user_crud.get_user_by_id(db=db, id=id)

    if not user:
        raise credentials_exception

    # We will loop throw the scopes defined in this route, if the scope not in token's scope => 403
    for scope in security_scopes.scopes:
        if scope not in token_scopes:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Not enough permission",
                headers={"WWW-Authenticate": "Bearer"},
            )
    return user


def authenticate_user(email: str, password: str, db: Session):
    user = user_crud.get_user_by_email(email=email, db=db)

    if not user:
        return False
    else:
        if not verify_password(password, user.password):
            return False
        else:
            return user


def create_token(payload: TokenPayload, token_expire: timedelta) -> str:

    if not token_expire:
        token_expire = timedelta(minutes=TOKEN_EXPIRE_MINUTES)

    to_encode = payload.dict().copy()
    expire = datetime.datetime.utcnow() + token_expire

    # Add exp field to payload
    to_encode.update({"exp": expire})

    # Encode JWT
    encoded_jwt = jwt.encode(
        to_encode,
        settings.secret_key,
        algorithm=settings.algorithm
    )

    return encoded_jwt
