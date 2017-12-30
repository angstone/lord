# lord

Compose Angstone backend network.
It brings microservices together and run the entire backend.

## Usage

```docker-compose up```

## Services:

* A Redis Instance - as our microservices needs a simple  and safe way to communicate each other in pub/sub like style and to cache somethings.
* A Event Store Instance - as our backend is event sourced
* A Elastic Search Instance - as our backend has one single scalable store system

* A router-service - as an API endpoint to all services.
