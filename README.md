# Auth-User

This MERN stack project offers a secure user authentication system, incorporating JWT for token-based authentication and bcrypt for password encryption. It features user login and signup functionalities, utilizing MongoDB for data storage. Designed with a React frontend and an Express/Node.js backend, it exemplifies modern web development practices.

## Features

- User Login and Signup functionality
- JWT (JSON Web Tokens) for secure authentication
- Password hashing with bcrypt
- MongoDB for data storage
- React for the frontend
- Node.js and Express backend

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

#### Clone the repository

```bash
git clone https://yourprojectrepository.git
cd yourprojectdirectory
```

#### Install backend dependencies

```bash
cd backend
npm install
```

#### Install frontend dependencies

```bash
cd frontend
npm install
```

#### Setup Environment Variables

Create a `.env` file in the backend directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000 (or your preferred port)
```

### Running the application

#### Start the backend server

```bash
cd backend
npm start
```

#### Start the React frontend

Open another terminal window/tab:

```bash
cd frontend
npm start
```

Your browser should automatically open to `http://localhost:3000` (or your configured frontend port), where you can interact with the application.

## Using the Application

Briefly explain how to use your application, including how to sign up, log in, and any other important features.

## Built With

- [MongoDB](https://www.mongodb.com/) - The database used
- [Express](https://expressjs.com/) - The web framework for Node.js
- [React](https://reactjs.org/) - The frontend library used
- [Node.js](https://nodejs.org/) - The backend runtime environment
- [JWT](https://jwt.io/) - Used for authentication
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Used for password hashing

## Authors

- **Prashant Kumar Singh** - _Initial work_ - [pras75299](https://github.com/pras75299)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
