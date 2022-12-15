from fastapi import APIRouter, Query, HTTPException
from datetime import timedelta
from fastapi import Depends
from ..models.user import User
from ..schemas.user import UserOut
from ..dependencies import auth
from ..models.token import Token

router = APIRouter(prefix="")


@router.get("login")
async def login(email: str = Query(), password: str = Query()) -> Token:
    user = auth.authenticate_user(email=email, password=password)

    if not user:
        raise HTTPException(401, "Incorrect username or password")
    else:
        return Token('access', 'refresh', token_type='bearer')
        # return Token(access_token=auth.create_token(payload={"sub": "1"}))


@router.get("/check-permission", response_model=UserOut)
async def check_permission(user: User = Depends(auth.get_current_user)) -> User:
    return user
