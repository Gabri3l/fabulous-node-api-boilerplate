![Fabulous Node Logo](https://s3-us-west-1.amazonaws.com/foodperk-losangeles/fabulous_node.png)

# Fabulous Node API Boilerplate

This boilerplate aims to build a tool to quickly setup a simple API with Node, powered by Express! It will also provide an ES6 ready environment to start leveraging the coolest newest JS features, along with some ready-to-go MongoDB models and basic Mongoose schemas. Setting up an environment to maximize your productivity is not too hard when developing an API, nonetheless I want to make the process even faster with this fabulous boilerplate!

# Getting Started

In order to get up and running with this boilerplate, you can follow the usual steps from the terminal. Most of these steps can be ran from inside the project folder, I will specify the correct path otherwise.

1. **Clone repo**

  `git clone https://github.com/Gabri3l/fabulous-node-api-boilerplate`

2. **Install dependencies**

  `npm run setup` or `npm install`

3. **Run your local MongoDB**

  Depending on your OS there are different way to start the db locally, the command is generally:

  ``mongod``

  TBC

4. **Run development server**

  This will run a script that utilizes `nodemon` and will refresh the local server for each edit saved on your API.

  `npm run watch`

  The development server will be running at `http://localhost:9000/`

### File Structure


```
.
├── README.md
├── index.js
├── package.json
├── server/
|   ├── api/
|   |   ├── horn
|   |   |   ├──hornController.js
|   |   |   ├──hornController.js
|   |   |   ├──hornController.js
|   |   ├── unicorn
|   ├── middleware/
|   |   ├── appMiddleware.js
|   ├── config/
|   |   ├── routesBlueprint.json
|   |   ├── config.js
|   |   ├── development.js
|   |   ├── production.js
|   |   ├── testing.js
|   ├── test/
|   |   ├── testSuite.js
|   ├── util/
|   |   ├── logger.js
|   ├── server.js
├── .gitattributes
└── .gitignore
```
