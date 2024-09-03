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

//* Configuration:
//! don't forget the database conneciton ENV ENV ENV ENV

//* Connect the Database

// Middlewares:

//* accept json, static uploadfile, auth check, logger, getModelList

// Routes:

// Error Handler:

// Run Server:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));

// Sync: clear database
// require('./src/helpers/sync')(); 