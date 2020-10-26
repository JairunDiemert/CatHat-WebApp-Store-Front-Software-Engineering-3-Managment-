FROM node:alpine

WORKDIR /api-gateway

COPY . .

RUN npm install

EXPOSE 54321

CMD [ "node", "api-index.js" ]