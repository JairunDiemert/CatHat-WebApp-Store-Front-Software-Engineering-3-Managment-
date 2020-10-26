FROM node:latest

WORKDIR /catalog-service

COPY . .

RUN npm install

EXPOSE 2468

CMD [ "node", "catalog-index.js" ]