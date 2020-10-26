FROM node:latest

WORKDIR /user-service

COPY . .

RUN npm install

EXPOSE 12345

CMD [ "node", "user-index.js" ]