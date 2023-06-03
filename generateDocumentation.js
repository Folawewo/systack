const fs = require('fs');
const path = require('path');

const generateDocumentation = (projectPath) => {
  const documentationPath = path.join(projectPath, 'documentation.md');
  const documentationContent = `
  # Project Documentation

  ## Folder Structure

  - controllers: This folder contains the controllers responsible for handling the business logic of the application.
  - models: This folder contains the data models representing the entities used in the application.
  - views: This folder contains the view files responsible for rendering the UI of the application.
  - routes: This folder contains the route handlers for different endpoints of the application.
  - utils: This folder contains utility functions and helper modules used throughout the application.

  ## Files

  - controllers/index.js: The main controller file that exports all the controller functions.
  - models/index.js: The main model file that exports all the model definitions.
  - views/index.html: The main HTML file for the application's UI.
  - routes/index.js: The main route file that exports all the route handlers.
  - utils/index.js: The main utility file that exports all the utility functions.

  ## Usage

  You can start the application by running the following command:

  \`\`\`
  node index.js
  \`\`\`
  `;

  fs.writeFileSync(documentationPath, documentationContent);
};

module.exports = generateDocumentation;
