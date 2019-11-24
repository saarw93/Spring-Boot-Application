# Spring-Boot-Application
spring-boot application with a REST controller, which exposes a Swagger API catalog. An exercise of OpenLegacy Company

This is a spring-boot application with a REST controller, which exposes a Swagger API catalog, and Angular frontend to use the APIs
The application exposes the following APIs:
* List of inventory items list (item no, name, amount, inventory code)
* Read item details (by item no)
* Withdrawal quantity of a specific item from stock (increase item amount by 1)
* Deposit quantity of a specific item to stock (decrease item amount by 1)
* Add item to stock
* Delete an item from stock
* Data is persisted on H2 DB using JPA.


There are Angular pages which enable to create, read, update, delete, increase and decrease item's amount.

To view the application, open your browser at: http://localhost:8080 for running the spring-boot application

To view the api docs, point your browser to http://localhost:8080/api-docs/swagger-ui.html

*Please note the application uses an in-memory database, so once the application is torn down your database will be lost.


## Minimum Requirements to run the app locally:

* Java
* Git
* Maven
* Docker


## Installing:

### Docker
Enter the following docker hub repositories: 
https://hub.docker.com/repository/docker/saarw93/open-legacy-exercise (to pull the spring-boot application image)
For running this docker image on your machine, run the following CLI commands:

$ docker pull saarw93/open-legacy-exercise

$ docker run --rm -d -p 8088:8088 saarw93/open-legacy-exercise:latest

https://hub.docker.com/repository/docker/saarw93/inventory-management (to pull the angular application image)
For running this docker image on your machine, run the following CLI commands:

$ docker pull saarw93/open-legacy-exercise

$ docker run --rm -d -p 80:80 saarw93/inventory-management:latest
