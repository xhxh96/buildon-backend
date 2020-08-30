# buildon-backend
Backend for AWS BuildOn Singapore project

# About
This codebase is the backend for AWS BuildOn Singapore project. The team is currently working on a prototype that supports DBS' relationship manager in the area of investment. This backend supports the backend services required for the project.

# Tech Stacks
JavaScript using NodeJS runtime, bootstrapped with Express application generator. The backend services mainly serve as API for interaction with user data on DynamoDB.

# Endpoints:
Currently, the endpoints are (running on port 3000):

* /users -- return a list of registered (?) users (GET)
* /users/create -- create a new user (POST) -- body should containe "email" and "password" parameters
* /users/getUser -- returns attribute associated to a user based on the user ID (POST) -- body should container "uuid" parameter

