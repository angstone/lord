# lord

THIS IS A PROTOTYPE OF A FRAMEWORK FOR BACKEND PROGRAMING

Compose Angstone backend network.
It brings microservices together and run the entire backend.

## Install And Use

```git clone http://github.com/angstone/lord```
```cd lord```
```sudo chmod +x scripts/*```
```npm start```

so if you do

```curl http://localhost:3000/ping```

you should see

``{"result":"pong"}``

## Services:

* A Nats Instance - as our microservices needs a simple  and safe way to communicate each other in pub/sub like style.
* An Event Store Instance - as our backend is event sourced
* An MongoDB Instance - as our backend has one single scalable store system

* A router-service - as API endpoint to all services.
* A ping-service - that does only what you think it does.
* Also ADDED a USER SIGNUP ACTION AS EXAMPLE:

## HOW TO WORK WITH THIS FRAMEWORK?

* SEPARATE YOUR BACKEND IN SIMPLE ACTIOS OR VIEWS API ROUTES.
An action perform changes in DB or dispatch triggers in the backend.
An view is just a data access.

If you want to add an action:

1- Add Models you need and you dont have yet in the folder Models pointing it in the index file.
2- Add the business rules and the messages the api will need in the Rules folder pointing it in the index file;
3- Add the Operator (Thats so easy like just declare it in the operator microservice);
4- Add the Reducer (Even if it is does nothing you have to add it. Just follows the structure of the sample);
5- Add Render (This perform changes in the DB using Models. The models declared will be automaticaly loaded);
6- Add Route in Routes folder (That is just easy as just point the route to the operation performed);

If you want to add a view:

1- Add view in View microservice. The Models declared will be loaded.
2- Add Route in Routes folder (That is just easy as just point the route to the view);

```npm start```
or to restart..
```npm run reborn```

