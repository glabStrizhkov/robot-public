# dbMaster

## install 
```shell
$ npm install
```

## environment
Set the environment at file .env in the root of this app.
* default app's host is localhost
* default app's port is 8080

## scripts
### run
```shell
$ npm run start
```
### do migration
```shell
$ npm run migrate
```
### undo migration
```shell
$ npm run migrate:undo
```

This module helps you to work with postgresql, using Sequelize as an ORM, throw one route block (controller), that is automatically choose the model to work with.

## branches
* /api/dev - for generating models and migrations.
* /api/use - for user routes to working with database.

### /api/dev - methods
* POST: /api/dev/createMM - generating model and/or migration.

### /api/use - methods
* POST: /api/use/:modelName - create an object in the database.
* GET: /api/use/all/:modelName - create an object in the database.
* GET: /api/use/one/:modelName - create an object in the database.
* PATCH: /api/use/:modelName - create an object in the database.
* DELETE: /api/use/:modelName - create an object in the database.

## examples
You can look for examples of using, body, params and query for each method in postman.
File for importing to postman located at: ./postman.json form the root of the app.