# express API starter

A simple Node.js API server setup. Built with Express, MongoDB (mongoose) and Passport for authentication.


## Usage

```bash
$ git clone https://github.com/robert52/express-api-starter.git
$ cd express-api-starter
$ npm install
$ cp config/environments/example.js config/environments/development.js
$ cp config/winston/environments/example.js config/winston/environments/development.js
```

Modify the environment specific configuration file accordingly.

Add the necessary transports for [winston](https://github.com/winstonjs/winston), also environment specific configuration is required.

To run the server us the following command, by default the server will run in development mode:

```bash
$ node server.js
```

## Running tests

To run a test simple use the following command:

```bash
$ mocha tests/unit/password.js
```

Or you can use npm scripts to run all `integration` or `unit` tests.

```bash
$ npm run integration
```

## Folder structure

### app

The main application folder containing all the server files, based on MVC structure.

_Note that `models` and `routes` are not mounted automatically, you need to wire them manually, to reduce unwanted logic getting into production, read below for more info._

- **controllers**: mostly will contain back-end business logic.
- **models**: this is where you store all Mongoose models. To include a model see `config/models.js` file.
- **routes**: Express routes will be found here. To include a route please see `config/routes.js` file.
- **helpers**: helper functions used in the whole application, mainly units that can be tested stand-alone.
- **middlewares**: mountable business logic on routes, connect style middleware.

### config

The config folder contains files which configure different application parts. Also you can find some special folders:

- **environments**: environment specific configuration files.
- **strategies**: authentication strategies used by Passport.
- **winston**: contains the logging mechanism and transport configuration.

### tests

The test folder stores the Mocha test suites.

- **unit**: contains only unit tests.
- **integration**: test suites that run on the whole application, or on modules that have dependencies.
- **fixtures**: data that can be loaded into MongoDB for testing or any other predefined test data.

## License

[MIT](https://github.com/robert52/express-api-starter/blob/master/LICENSE)
