# Mi Learning Backend Application

> This is a Microservic backend application serving Mi Learning app

# How to run application

## Option 1: Run all services

1. Create `prod.env` file like below template

   ```
   POSTGRES_HOST=db
   POSTGRES_PORT=5432
   POSTGRES_DB=postgres
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres

   SECRET_KEY=mi-learning
   ALGORITHM=HS256

   AUTH_HOST=auth
   AUTH_PORT=80
   ```

2. Deploy stack

   Shell

   ```
   source prod.env # To export all environment
   variables to shell
   export ENV=dev
   docker-compose --env-file prod.env --profile prod up
   ```

## Option 2: Run Auth Service & App Service Separatedly

1. Create `dev.env` file like below template

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

2. Innitalize dependencies and run DB service
   `Shell`

   ```
   source dev.env
   export ENV=dev
   docker-compose --env-file dev.env up
   ```

3. Run auth service

   ```
   cd services/auth # Change directory to auth service
   python3 -m venv env # To create environment
   source env/bin/activate # To activate environment
   uvicorn src.main:app --reload
   ```

4. Run app service

   ```
   cd services/app
   npm i
   npm run start:dev
   ```
