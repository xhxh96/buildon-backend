# buildon-backend
Backend for AWS BuildOn Singapore project

# About
This codebase is the backend for AWS BuildOn Singapore project. The team is currently working on a prototype that supports DBS' relationship manager in the area of investment. This backend supports the backend services required for the project.

# Tech Stacks
JavaScript using NodeJS runtime, bootstrapped with Express application generator. The backend services mainly serve as API for interaction with user data on DynamoDB.

# Endpoints:
Currently, the endpoints are (running on port 3000):

| Endpoint        | Method | Body                           | Response          | Description                                                                |
|-----------------|--------|--------------------------------|-------------------|----------------------------------------------------------------------------|
| `/users`        | GET    | N.A                            | `[User]`          | Returns an array of registered users                                       |
| `/users/create` | POST   | email: string password: string | `user_id`         | Create an user account and returns the `user_id` of the associated account |
| `users/getUser` | GET    | userId: string                | `User` \| `Error` | Returns the attribute of the associated user queried via `user_id`         |
| `users/login`   | GET    | email: string password: string | `User` \| `Error` | Returns the attribute of the associated user if login successful           |
