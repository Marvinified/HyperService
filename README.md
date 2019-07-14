# HyperServices
An HyperService is a micro-service *approach* where a micro-service has a *graphql interface* (HTTP) and a *kafka interface* (Messaging) 

An Hyperservice allows communication through graphql from api gateways or any external connections, while communication between microservice to microservice can be through *kafka pub:sub system*

## Architecture

![architecture of an hyperservice](https://github.com/Marvinified/Files/blob/master/Hyper-service%402x.png)

Every Hyper-service has 
  - *a kafka interface:*
    
    the kafka interface is so that every service can publish and subscribe to a topic / topics, the publisher and consumer are available in all context and can be invoke at any point in the service logic, even in the graphql resolvers. 
  
  - *a graphql server interface:*
  
  the graphql interface is to allow the service to serve for clients that are request-response base like a frontend client which requires a respond on every request.
   
  - all these work together to create a robust micro-service architecture approach.
   
## How it works

![alt ss](https://github.com/Marvinified/Files/blob/master/Hyper-service%402x-1.png)

- *All Hyper services are connected to a kafka cluster:* 
    
    this allows for pub:sub communication between micro-services e.g If a user was created on auth server it published to "newUserCreated" topic then every service subscribe to that topic can be handle that event according, i.e the email service might send a "wellcome email to the user", while the notification service notifies the admin.

- Why a GQL Interface is needed

   In the conventional messaging system, using the new user scenerio, an event will be publish from a web client, this client can only recieve a response of whether the topic sent successfully or not, meaning there are only two posible response either message has been publish or not. but if clients communicate with the services over a request-response protocol like gql, then there is a response for the client to work on while the internal communication between services is left to a messaging system like *Kafka* to handle.
   
### Note
  
  this repository is just a implementation of this approach, this approach can be reimplemeted in any technology as required
  
### How to use

  #### Requirement
  
    - kafka server/cluster
    - Docker
    - Docker compose

- Clone this repository
 ```git clone git@github.com:Marvinified/HyperService.git```
- edit the docker-compose.yml to fit your service.
- run docker-compose up

#### and you hyper-service is up and running.

