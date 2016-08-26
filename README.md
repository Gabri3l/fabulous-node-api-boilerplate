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

  Depending on your OS there are different ways to start the db locally, the command is generally:

  ``mongod``

  and you can run this from `C:\Program Files\MongoDB\Server\3.2\bin`. Once your local db is up and running you will be able to test the API either through the test suite or with other tools like [Posteman](https://www.getpostman.com/).

4. **Run development server**

  This will run a script that utilizes `nodemon` and will refresh the local server for each edit saved on your API.

  `npm run watch`

  The development server will be running at `http://localhost:9000/`

# File Structure

This boilerplate follows a modularized directories structure. As many pointed out [LINK, LINK, LINK] there are pros and cons of such approach. If working on a small API it feels natural to group together models, then controllers and so on, but as the project grows you end up having few folders with many models or controllers files. This makes looking for something specific more intricate than it should be. Modularizing helps cope with that, you can consider each directory as a mini API and focus on one specific folder at a time.

```
.
├── README.md
├── index.js
├── package.json
├── server/
|   ├── api/
|   |   ├── horn
|   |   |   ├──hornController.js
|   |   |   ├──hornModel.js
|   |   |   ├──hornRoutes.js
|   |   |   ├──hornTests.js
|   |   ├── unicorn
|   |   |   ├──unicornController.js
|   |   |   ├──unicornModel.js
|   |   |   ├──unicornRoutes.js
|   |   |   ├──unicornTests.js
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
├── .babelrc
├── .eslintrc
├── .gitattributes
└── .gitignore
```
