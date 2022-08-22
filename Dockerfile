FROM node:16-alpine

WORKDIR /usr/src/app

RUN npm install
COPY package*.json ./
COPY . /usr/src/app

EXPOSE 3000
CMD [ "node", "server.js" ]
