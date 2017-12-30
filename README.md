# lord

Compose Angstone backend network.
It brings microservices together and run the entire backend.

## Usage

```docker-compose up```

## Services:

* A Redis Instance - as our microservices needs a simple  and safe way to communicate each other in pub/sub like style and to cache some stuff.
* An Event Store Instance - as our backend is event sourced
* An Elastic Search Instance - as our backend has one single scalable store system

* A router-service - as API endpoint to all services.
