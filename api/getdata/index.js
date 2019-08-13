const API_NAME = 'GET DATA';
const express = require('express');
const helmet = require('helmet');
const app = express();
const Retrieve = require('./_retrieve');

app.use(helmet());

console.log(`|>-> INIT API: ${ API_NAME }`);

app.get('*', (req, res) => {
    console.log(`|> ${ API_NAME } received request from ${ req.hostname }`);
    console.log('\n REQUEST HEADERS: ', req.headers, '\n');
    Retrieve(req.query,res);
    //res.status(200).send('yes');
    //res.send();
    
})
module.exports = app;