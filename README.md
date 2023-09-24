# Code-Fellow Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/316cb3f1-17fe-47fe-a85c-b4b3e3c56c6a/deploy-status)](https://app.netlify.com/sites/code-fellow/deploys)


Welcome to the Code-Fellow Website! This is a Node.js application built with npm packages to provide a seamless and user-friendly experience for Code-Fellow patients. It offers various features and functionalities to assist patients in managing their appointments, accessing dental resources, and learning more about the clinic's services.

## Features

1. **Pillar Pages**: Marketing pages.

2. **Services**: Service Page

3. **Projects**: Projects

4. **Contact Forms**: Contact Forms

## Installation

To run the Code-Fellow Website locally on your machine, follow these steps:

1. Ensure that you have Node.js and npm installed on your system.

2. Clone the repository:

   ```
   git clone https://github.com/junaid-ublox/code-fellow.git
   ```

3. Navigate to the project's directory:

   ```
   cd code-fellow
   ```

4. Install the dependencies:

   ```
   npm install
   ```

5. Create a `.env` file in the root directory and configure the necessary environment variables, such as database connection details or any API keys required.

6. Run netlify CMS localy:

   ```
   npx netlify-cms-proxy-server
   ```

7. Start the application:

   ```
   npm start
   ```

8. Open your web browser and visit `http://localhost:8000` to access the Code-Fellow Website.

## Dependencies

The Code-Fellow Website utilizes the following npm packages:

- `express`: Fast, unopinionated, and minimalist web framework for Node.js.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `nodemon`: Utility that monitors changes in the source code and automatically restarts the server.
- `ejs`: Embedded JavaScript templates for server-side rendering.
- `bcrypt`: Library for hashing passwords and handling password-related functionalities.
- `passport`: Authentication middleware for Node.js.
- `jsonwebtoken`: Library for generating JSON Web Tokens (JWT) for user authentication.
- `cookie-parser`: Middleware for parsing HTTP cookies.
- `multer`: Middleware for handling `multipart/form-data`, primarily used for file uploads.
- `express-flash`: Middleware for displaying flash messages to the user.
- `moment`: Library for parsing, validating, manipulating, and formatting dates.

## Contributing

Contributions are always welcome! If you want to enhance the Code-Fellow Website or fix any issues, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```
   git checkout -b feature/your-feature-name
   ```

3. Make your modifications and commit changes:

   ```
   git commit -am 'Add a new feature'
   ```

4. Push the changes to your forked repository:

   ```
   git push origin feature/your-feature-name
   ```

5. Submit a pull request describing your changes.

Please ensure that your code