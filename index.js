"use strict"

const express = require('express');
const todo = require('./routes/todo.js');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.json());

app.use('/list',todo);

app.listen(port, () => console.log(`App running on port ${port}`));