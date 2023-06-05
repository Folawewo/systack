# ⚡️ systack

systack is a command-line tool to generate a Node.js backend project structure following the MVC architecture pattern. It automatically sets up the folder and file structure required for your backend application.

## Features
- MVC architecture: Easily organize your codebase using the Model-View-Controller pattern.
- Automated project setup: Generate the project structure with a single command.
- Documentation generation: Automatically generate a documentation file describing the folder structure and purpose of each file.
- Best practices: Follows industry best practices for organizing a Node.js backend project.
- Easy customization: Modify the generated structure and files to fit your specific requirements.

## Installation

Install systack globally using npm:

```shell
sudo npm install -g systack
```
## Usage
Create your project by running the following command:

```
systack <project-name>
```

This will generate the project structure in a new directory with the provided project name.

## Folder Structure

The generated project structure follows a standard MVC architecture, with additional folders for configuration, middleware, public assets, tests, and utilities. Here's an overview of the folder structure:

- `config/`: Configuration files for various aspects of the application.
- `controllers/`: Controllers responsible for handling the business logic.
- `models/`: Data models representing the entities used in the application.
- `views/`: View files responsible for rendering the UI.
- `routes/`: Route handlers for different endpoints.
- `middlewares/`: Middleware functions that modify or process incoming requests.
- `public/`: Folder to serve static files (CSS, JavaScript, images, etc.).
- `tests/`: Test files and related configuration for testing the application.
- `utils/`: Utility functions and helper modules used throughout the application.
- `index.js`: Entry point of your application.
- `README.md`: This file, providing an overview of the project and instructions for developers.
- `package.json`: Project metadata and dependencies.

For a more detailed explanation of each folder and file, refer to the generated Project Documentation file in your newly created backend application.

## Documentation

The Project Documentation file provides detailed information about the folder structure, purpose of each file, and usage instructions. It is automatically generated when you create a new project using systack.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, feature request or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


💻 Happy coding!