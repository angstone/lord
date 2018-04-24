#!/bin/bash

docker rm $(docker ps -a --format "{{.Names}}" | grep $1)
docker rmi $(docker images --format "{{.Repository}}" | grep $1)
