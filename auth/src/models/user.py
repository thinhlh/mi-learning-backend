from sqlalchemy import Column, String, DATETIME
from sqlalchemy.dialects.postgresql import UUID, ENUM
from pydantic import BaseModel
from ..config.database import Base
from .role import Role


class User(Base):
    __tablename__ = "user"

    id = Column(UUID(as_uuid=True), primary_key=True)
    name = Column(String)
    password = Column(String)
    email = Column(String, unique=True)
    occupation = Column(String)
    birthday = Column(DATETIME)
    avatar = Column(String)
    deletedAt = Column(DATETIME)
    role = Column(ENUM('admin', 'student', 'teacher'))
