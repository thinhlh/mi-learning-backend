from sqlalchemy import Column, String, DATETIME, ForeignKey
from sqlalchemy.dialects.postgresql import UUID, ENUM
from pydantic import BaseModel
from ..config.database import Base
from .role import Role
import uuid


class Student(Base):
    __tablename__ = "student"

    id: UUID = Column(
        UUID(as_uuid=True),
        ForeignKey("user.id"),
        primary_key=True,
        index=True,
    )
