from pydantic import BaseSettings
import os


class Settings(BaseSettings):
    postgres_host: str = "localhost"
    postgres_port: int = 5432
    postgres_db: str = "postgres"
    postgres_user: str = "postgres"
    postgres_password: str = "postgres"
    algorithm: str = 'HS256'
    secret_key: str

    # class Config:
    #     env_file = f"../env/{os.getenv('ENV', 'dev')}.env"

    def get_postgres_database_url(self):
        return f"postgresql://{self.postgres_user}:{self.postgres_password}@{self.postgres_host}:{self.postgres_port}/{self.postgres_db}"


settings = Settings()
