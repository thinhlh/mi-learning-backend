from fastapi import Depends
from ..models.user import User
from sqlalchemy.orm import Session
from ..config.database import get_db


class UserCRUD():
    def get_user_by_id(self, id: str, db: Session) -> User | None:
        return db.query(User).filter(id == User.id).one_or_none()

    def get_users(self, db: Session) -> list[User]:
        return db.query(User).all()

    def get_user_by_email(self, email: str, db: Session) -> User | None:
        return db.query(User).filter(User.email == email).one_or_none()
