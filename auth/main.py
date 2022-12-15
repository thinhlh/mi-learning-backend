from fastapi import FastAPI
from src.models import user
from src.router import user
from src.router import auth

app = FastAPI()

app.include_router(router=user.router)
app.include_router(router=auth.router)
