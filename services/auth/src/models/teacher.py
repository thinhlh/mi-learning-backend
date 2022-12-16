from sqlalchemy import Column, String, DATETIME
from sqlalchemy.dialects.postgresql import UUID, ENUM
from pydantic import BaseModel
from ..config.database import Base
from .role import Role
import uuid


class Teacher(Base):
    __tablename__ = "teacher"

    id: UUID = Column(
        UUID(as_uuid=True),
        primary_key=True,
        index=True,
    )
