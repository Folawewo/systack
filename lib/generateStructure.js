const fs = require('fs');
const path = require('path');
const generateDocumentation = require('./generateDocumentation');

const generateFolderStructure = (rootPath) => {
  // create the root folder
  fs.mkdirSync(rootPath);

  // create subfolders
  const folders = ['controllers', 'models', 'views', 'routes', 'utils'];
  folders.forEach((folder) => {
    const folderPath = path.join(rootPath, folder);
    fs.mkdirSync(folderPath);
  });

  // create files
  const files = {
    controllers: 'index.js',
    models: 'index.js',
    views: 'index.html',
    routes: 'index.js',
    utils: 'index.js',
  };

  Object.entries(files).forEach(([folder, filename]) => {
    const filePath = path.join(rootPath, folder, filename);
    fs.writeFileSync(filePath, '');
  });

  // generate the documentation
  generateDocumentation(rootPath);
};

const generateStructure = () => {
  // get the project name from the command line arguments
  const projectName = process.argv[2];

  if (!projectName) {
    console.error('Please provide a project name.');
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);

  // check if the project directory already exists
  if (fs.existsSync(projectPath)) {
    console.error('Project directory already exists.');
    process.exit(1);
  }

  // generate the project structure
  generateFolderStructure(projectPath);

  console.log(`Project '${projectName}' created successfully!`);
};

module.exports = generateStructure;
