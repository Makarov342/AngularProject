# Angular Project - README
# Introduction
Welcome to the README file for the Angular project! This project is a portfolio web application built using Angular version 15.0.3. It showcases various sections such as "about me," "education," "experience," "skills," and "projects." The application allows users to navigate through these sections, edit content (with appropriate permissions), and interact with the backend through corresponding services.

# Features
Single Page Application (SPA) using Angular routing
Bootstrap tools for CSS styling
Navigation bar for easy section navigation
User authentication and login functionality
CRUD (Create, Read, Update, Delete) operations for content editing
Integration with backend using HTTP requests
Deployment on Google's Firebase
# Installation and Setup

To see the project deployed on Google Firebase, please visit: https://proyectovj-6c736.web.app/

Note: The login process may experience delays due to the backend being hosted on a render-free option, which may have limited resources. Please be patient if the login takes longer than expected.

To run this Angular project locally, follow these steps:

Clone the repository: git clone [repository URL]

Install project dependencies: npm install

Start the development server: ng serve

Open your browser and navigate to http://localhost:4200

Make sure you have Node.js and the Angular CLI installed on your system before proceeding with the installation.

# Project Structure
The project follows a structured organization with key components and files. Here's a brief overview:

src/app/components: Contains the various sections of the portfolio (about me, education, experience, skills, projects).

src/app/services: Includes services that handle HTTP requests and interact with the backend.

src/app/app-routing.module.ts: Configures the application routes and associated components.

src/app/token.service.ts: Handles user authentication and token management.

# Backend and Deployment
The backend of this project is built with the Spring Boot framework in Java version 18. It utilizes controllers to handle HTTP requests and service classes to perform CRUD operations. Entity classes define the structure and data for each component's table, with a relational MySQL database as the data store.

The backend repository can be found here: https://github.com/Makarov342/backendArgPro

The deployment of the frontend is done on Google's Firebase, providing a scalable and secure hosting solution.

# Further Assistance and Feedback
If you have any questions, suggestions, or feedback regarding this Angular project, please feel free to reach out to me. I am open to further discussions and would appreciate any input to enhance the application.

Thank you for your interest in this project, and I look forward to your valuable feedback.

