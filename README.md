# Mi Learning Backend Application

> This is a Microservic backend application serving Mi Learning app

# How to run application

1. Create dev.env file like below template
```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

SECRET_KEY=mi-learning
ALGORITHM=HS256

AUTH_HOST=127.0.0.1
AUTH_PORT=8000
```

2. Export ENV environment
```
export ENV=dev
```

3. Run docker services
```
docker compose up
```

3. Install nestjs dependencies
```
cd services/app
npm i
```


5. Run nestjs application
```
npm run start:dev
```
