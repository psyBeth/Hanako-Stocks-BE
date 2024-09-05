'use strict'

//* Express:
const express = require('express');
const app = express();

//* Required modules:

// env variables:
require('dotenv').config();
const HOST = process.env?.HOST || '127.0.0.1';
const PORT = process.env?.PORT || 8000;

// async error handler:
require('express-async-errors');

//* Configurations:

// Connect the Database
const { dbConnection } = require('./src/configs/dbConnection');
dbConnection();

//* Middlewares:

// Accept JSON:
app.use(express.json());

// Call static upload file:
app.use('./upload', express.static('./upload'));

// Auth check:
app.use(require('./src/middlewares/authentication'));

//* logger, getModelList

// Routes:

// Error Handler:
app.use(require('./src/middlewares/errorHandler'));

// Run Server:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));

// Sync: clear database
// require('./src/helpers/sync')(); 