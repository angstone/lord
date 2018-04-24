#!/bin/bash

if [ "$#" -eq 1 ]; then
    $2="."
fi
cd $2
docker rm $(docker ps -a --format "{{.Names}}" | grep $1)
docker rmi $(docker images --format "{{.Repository}}" | grep $1)
docker-compose up
