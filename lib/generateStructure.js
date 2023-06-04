const fs = require('fs');
const path = require('path');
const generateDocumentation = require('./generateDocumentation');

const generateFolderStructure = (rootPath) => {
  // create the root folder
  fs.mkdirSync(rootPath);

  // create subfolders
  const folders = ['config', 'controllers', 'models', 'views', 'routes', 'middlewares', 'public', 'tests', 'utils'];
  folders.forEach((folder) => {
    const folderPath = path.join(rootPath, folder);
    fs.mkdirSync(folderPath);
  });

  // create files
  const files = {
    config: 'index.js',
    controllers: 'index.js',
    models: 'index.js',
    views: 'index.html',
    routes: 'index.js',
    middlewares: 'index.js',
    public: 'index.html',
    tests: 'index.test.js',
    utils: 'index.js',
    root: {
      'index.js': '',
      'README.md': '',
      'package.json': JSON.stringify(
        {
          name: 'your-project-name',
          version: '1.0.0',
          description: 'Your project description',
          main: 'index.js',
          scripts: {
            start: 'node index.js'
          },
          keywords: [],
          author: '',
          license: 'MIT',
          dependencies: {},
          devDependencies: {}
        },
        null,
        2
      )
    }
  };

  const createFilesRecursively = (baseDir, fileObject) => {
    Object.entries(fileObject).forEach(([fileName, content]) => {
      const filePath = path.join(baseDir, fileName);

      if (typeof content === 'string') {
        fs.writeFileSync(filePath, content);
      } else if (typeof content === 'object') {
        fs.mkdirSync(filePath);
        createFilesRecursively(filePath, content);
      }
    });
  };

  createFilesRecursively(rootPath, files);

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
