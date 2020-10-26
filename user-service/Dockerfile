FROM node:alpine

WORKDIR /user-service

COPY . .

RUN npm install

EXPOSE 12345

CMD [ "node", "user-index.js" ]