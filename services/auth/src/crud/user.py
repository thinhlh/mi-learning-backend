from fastapi import Depends, HTTPException
from ..models.user import User
from sqlalchemy.orm import Session
import sqlalchemy.exc
from ..config.database import get_db
from ..schemas.user import UserCreate
from psycopg2 import Error
import uuid


class UserCRUD():
    def get_user_by_id(self, id: str, db: Session) -> User | None:
        return db.query(User).filter(id == User.id).one_or_none()

    def get_users(self, db: Session) -> list[User]:
        return db.query(User).all()

    def get_user_by_email(self, email: str, db: Session) -> User | None:
        return db.query(User).filter(User.email == email).one_or_none()

    def create_user(self, user_create: UserCreate, db: Session) -> User | None:
        user = User(**user_create.dict())
        user.id = uuid.uuid4()
        try:
            db.add(user)
            db.commit()
            db.refresh(user)
            return user

        except sqlalchemy.exc.SQLAlchemyError as e:
            err = ' '.join(e.args)
            raise HTTPException(status_code=400, detail=err)
