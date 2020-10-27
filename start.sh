#!/bin/bash
\
<<COMMENT
    This script will start all the catHat Services, or
    you can take pieces of the script and copy and past 
    directly into the bash terminal.
COMMENT
\
echo Starting cat-hats service && \
cd ~/SEM_Group_2/ && \
cd cat-hats/ && \
docker build -t cat-hats:01 . && \
docker run -d --rm --name cat-hats-01 --network="host" cat-hats:01 && \
\
echo Starting api-gateway service && \
cd ~/SEM_Group_2/ && \
cd api-gateway/ && \
docker build -t api-gateway:01 . && \
docker run -d --rm --name api-gateway-01 --network="host" api-gateway:01 && \
\
echo Starting catalog-service service && \
cd ~/SEM_Group_2/ && \
cd catalog-service/ && \
docker build -t catalog-service:01 . && \
docker run -d --rm --name catalog-service-01 -p2468:2468 catalog-service:01 && \
\
echo Starting user-service service && \
cd ~/SEM_Group_2/ && \
cd user-service/ && \
docker build -t user-service:01 . && \
docker run -d --rm --name user-service-01 -p12345:12345 user-service:01 && \
\
echo Starting user-service log message && \
docker container logs user-service-01 && \
\
echo Starting cat-hats log message && \
docker container logs cat-hats-01 && \
\
echo Starting api-gateway log message && \
docker container logs api-gateway-01 && \
\
echo Starting catalog-service log message && \
docker container logs catalog-service-01


<<COMMENT
This can be used to stop all the services at once

docker stop user-service-01 && \
\
docker stop catalog-service-01 && \
\
docker stop api-gateway-01 && \
\
docker stop cat-hats-01
COMMENT



