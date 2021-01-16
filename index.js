const express = require('express');
const bodyParser = require('body-parser');
// connect to database
const connect = require('./database/connect.js');
// les routes des API
const userApi = require('./routes/userApi');
const todoApi = require('./routes/todoApi');
const emailApi = require('./routes/emailApi');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userApi);
app.use('/todos', todoApi);
app.use('/email', emailApi); 

app.listen(process.env.port || 4000, function () {
    console.log('Backend server start on port 4000');
});

// app.use('/api', require('./routes/api'));