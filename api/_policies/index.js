const API_NAME = 'POLICIES';
const express = require('express');
const helmet = require('helmet');
const ut = require('util');
const app = express();

app.use(helmet());

ut.log(`|>-> INIT API: ${ API_NAME }`);

app.get('*', (req, res) => {
    ut.log(`|> ${ API_NAME } received request from ${ req.hostname }`);
    ut.log('\n REQUEST HEADERS: ', req.headers, '\n');
    //console.log('req.query.requestAsset: ', req.query.requestAsset);
    res.status(200).send('yes');
    res.send();
    
})
module.exports = app;