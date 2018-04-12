# Node.js server with MongoDB

## Requirements

* [Node.js](https://nodejs.org/en/download/current/)
* [MongoDB](https://docs.mongodb.com/manual/installation/?jmp=footer#mongodb-community-edition)

## Install
```
npm install
```

## Usage
[You will need to run MongoDB before running the server.](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#start-mongodb)

```
npm start
```

## Test the server with [Postman](https://www.getpostman.com/apps)

* #### Create an User

POST request on localhost:3000/user with a body (x-www-form-urlencoded) that looks like { name: 'John', email: 'john.doe@mailbox.com' }

* #### Get all Users

GET request on localhost:3000/users

* #### Get an User

GET request on localhost:3000/user/some_id

* #### Update an User

PUT request on localhost:3000/user/some_id with a body (x-www-form-urlencoded) that looks like { ...changes }

* #### Delete an User

DELETE request on localhost:3000/user/some_id

* #### Same for Message
