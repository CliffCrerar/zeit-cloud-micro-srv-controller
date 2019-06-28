/**
 * License: MIT
 *
 * SERVE STATIC FILES
 *
 * @summary This middleware helps serving static files
 * @author Cliff Crerar
 *
 * Created at     : 2019-06-25 20:29:49
 * Last modified  : 2019-06-25 22:54:09
 */

// @ts-nocheck

const API_NAME = 'STATIC FILE SERVER';
const express = require('express');
const helmet = require('helmet');
const ut = require('util');
const path = require('path');
const fs = require('fs');
const app = express();

app.use('/nortwindsnippet', express.static(path.join(__dirname, '../../assets/files/learnsql/northwind.sql')))

app.use(helmet());

console.log(process.cwd());

ut.log(`|>-> INIT API: ${API_NAME}`);

app.get('/static?', (req, res) => {
    ut.log(`|> ${API_NAME} received request from ${req.hostname}`);

    console.log('app.hostname: ', app.hostname);
    ut.log('req.params: ', req.url);
    ut.log('req.query: ', req.query);
    ut.log('req.hostname: ', req.host);
    ut.log('req.hostname: ', req.originalUrl);
    ut.log('req.hostname: ', req.rawHeaders);
    res.set('Content-Type', 'text/html');
    resource(req.query, res);
});

function resource(qParam, res) {

    ut.log(`|> ${API_NAME} Passed to resource delegator`);
    console.log('qParam: ', qParam);

    switch (qParam.resource) {
        case 'nortwindsnippet':
            console.log(qParam);
            console.log(res.headers);
            //console.log(path.join('/assets/files/learnsql/northwind.sql'));
            //console.log("PATH: ", path.resolve(__dirname + '/assets/files/learnsql/northwind.sql'));
            const text = fs.readFileSync('/nortwindsnippet');
            console.log('text: ', text);
            return res.status(200).send('correct resource').end();
        default:
            return res.status(404).send('Requested resource not available.').end();
    }
}

app.get('/static', (req, res) => {
    ut.log(`|> ${API_NAME} received request from ${req.hostname}`);
    ut.log('req.params: ', req.params);
    ut.log('req.headers:', req.headers);
    res.set('Content-Type', 'text/html');
    res.status(404).send('No request params where provided');
    res.end();
})

module.exports = app;