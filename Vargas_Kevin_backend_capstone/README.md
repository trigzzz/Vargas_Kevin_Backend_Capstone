# Floodz Training Backend
Welcome to the backend repository of the Floodz Training project. This repository contains the server-side code responsible for handling authentication, managing data, and serving API endpoints for the Floodz Training application.

## Technologies Used
Node.js: A JavaScript runtime environment used for building server-side applications.
Express.js: A web application framework for Node.js used for creating APIs and handling HTTP requests.
MongoDB: A NoSQL database used for storing user data, community posts, and other application-related information.
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, used for schema-based modeling and interacting with MongoDB databases.
JSON Web Tokens (JWT): A method for securely transmitting information between parties as a JSON object. JWTs are used for user authentication and authorization.

## Project Structure
The backend codebase is organized into the following main directories and files:

controllers/: Contains controller functions that define the application's route handlers and business logic. Each controller corresponds to a specific route or resource endpoint.
models/: Defines MongoDB data models and schemas using Mongoose. These models represent the structure of documents stored in the database.
routes/: Contains Express router modules that define API endpoints and route handlers. Each route file maps HTTP requests to corresponding controller functions.
middlewares/: Custom middleware functions used for tasks such as authentication, error handling, and request validation.
config/: Configuration files for setting up environment variables, database connections, and other application settings.
server.js: Entry point of the application where the Express server is created and configured.

## Setup Instructions
To run the backend server locally or deploy it to a hosting platform, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Run npm install to install dependencies.
Set up environment variables by creating a .env file and defining variables such as PORT, MONGO_URI, JWT_SECRET, etc.
Start the server by running npm start or node server.js.

## API Endpoints
The backend exposes the following API endpoints:

POST /api/users/register: Register a new user account.
POST /api/users/login: Log in an existing user.
POST /api/users/logout: Log out the currently authenticated user.
GET /api/users/profile: Get the profile information of the currently authenticated user.
GET /api/posts: Get all community posts.
POST /api/posts: Create a new community post.
GET /api/posts/:id: Get a specific community post by ID.
PUT /api/posts/:id: Update a community post by ID.
DELETE /api/posts/:id: Delete a community post by ID.
For detailed information on request payloads, response formats, and usage examples, refer to the API documentation or source code.

Contributors
Kevin Vargas
