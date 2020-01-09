# Spring-Boot-Application
Spring-boot application with a REST controller, which exposes a Swagger API catalog.

This is a spring-boot application with a REST controller, which exposes a Swagger API catalog, and Angular frontend to use the APIs.
The application exposes the following APIs:
* List of inventory items list (item no, name, amount, inventory code)
* Read item details (by item no)
* Withdrawal quantity of a specific item from stock (increase item amount by 1)
* Deposit quantity of a specific item to stock (decrease item amount by 1)
* Add item to stock
* Delete an item from stock
 
 
Data is persisted on H2 Database using JPA.
There are Angular pages which enable to create, read, update, delete, increase and decrease item's amount.

The Spring-boot application runs at: http://localhost:8088

To view the API docs, point your browser to http://localhost:8088/api-docs/swagger-ui.html
To view the API documentation as a JSON, point your browser to http://localhost:8088/v2/api-docs

To view the Angular app, point your browser to http://localhost:80

*Please note the application uses an in-memory database, so once the application is torn down your database will be lost.


## Minimum Requirements to run the app locally:

* Java
* Git
* Maven
* Docker


## Installing:

### Running the App through Docker
Enter the following docker hub repositories: 
https://hub.docker.com/repository/docker/saarw93/open-legacy-exercise
(to pull the spring-boot application image)
For running this docker image on your machine, run the following CLI commands:

$ docker pull saarw93/open-legacy-exercise

$ docker run --rm -d -p 8088:8088 saarw93/open-legacy-exercise:latest

https://hub.docker.com/repository/docker/saarw93/inventory-management 
(to pull the angular application image)
For running this docker image on your machine, run the following CLI commands:

$ docker pull saarw93/inventory-management

$ docker run --rm -d -p 80:80 saarw93/inventory-management:latest
