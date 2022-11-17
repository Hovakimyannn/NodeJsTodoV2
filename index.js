'use strict'

const express = require('express');
const todo = require('./routes/todo.js');
const authentication = require('./routes/auth.js');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./routes/middlewares/Auth.js');
const Database = require('./database/DatabaseManager.js');

const port = 3000;

app.use(bodyParser.json());
app.use('/list', auth, todo);
app.use('/user', authentication);

app.listen(port, () => console.log(`App running on port ${port}`));
Database.connect();
