# SEM_Group_2

# Mad Hatters

To run our project:

<b>Turn on Service</b>

1. cd into our user-service folder
2. run npm install
3. node index.js

<b>Turn on Gateway</b>

1. cd into our api-gateway folder
2. run npm install
3. node api-index.js

<b>Then Turn on Client</b>

1. cd into our cat-hats folder
2. run npm install
3. ng serve or npm start
4. Go to localhost:4200

////////////////////////
//To Run with Docker

//Terminal 1

cd cat-hats/
dockebuild -t cat-hats:01 .
docker run -it --name cat-hats-01 --network="host" cat-hats:01

//Terminal 2

cd api-gateway/
docker build -t api-gateway:01 .
docker run -it --name api-gateway-01 --network="host" api-gateway:01

//Terminal 3

cd catalog-service/
docke build -t catalog-service:01 .
docker run -it --name catalog-service-01 -p2468:2468 catalog-service:01

//Terminal 4

cd user-service/
docker build -t user-service:01 .
docker run -it --name user-service-01 -p12345:12345 user-service:01
