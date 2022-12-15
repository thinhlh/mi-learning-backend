from pydantic import BaseModel
from pydantic import UUID4
import datetime
from ..models.role import Role
from enum import Enum


class UserBase(BaseModel):

    id: UUID4
    name: str
    email: str
    occupation: str
    birthday: datetime.datetime | None
    avatar: str
    deletedAt: datetime.datetime | None
    role: Role

    class Config:
        orm_mode = True


class UserOutWithPassword(UserBase):
    password: str


class UserOut(UserBase):
    pass
