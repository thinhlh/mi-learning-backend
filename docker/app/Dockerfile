FROM node:16
ADD ["./services/app/nest-cli.json", "./services/app/package.json", "./services/app/tsconfig.json", "/data/"]
WORKDIR /data
RUN npm i
ADD ./services/app/ /data  
EXPOSE 8080
CMD [ "npm", "run", "start" ]