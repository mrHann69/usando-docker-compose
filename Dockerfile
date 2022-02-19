# syntax=docker/dockerfile:1
FROM node:alpine

WORKDIR /code

COPY package*.json ./

RUN npm cache clean --force
RUN npm install

EXPOSE 8080

COPY . .

CMD ["npm", "start"]
