/**
 * MIT
 *
 * SQL FILE as Download
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2019-06-25 19:09:59 
 * Last modified  : 2019-06-25 21:17:26
 */
// @ts-ignore
const API_NAME = 'SQL FILE DOWNLOAD';
// @ts-ignore
const express = require('./node_modules/express');
// @ts-ignore
const helmet = require('./node_modules/helmet');
const fs = require('fs');
const path = require('path');
const ut = require('util');
const app = express();

// @ts-ignore
app.use(helmet());
// @ts-ignore
app.use(helmet.frameguard({ action: 'allow-from', domain: "http://127.0.0.1:3030/creating-the-demo-database" }));

ut.log(`|>-> INIT API: ${API_NAME}`);

// @ts-ignore
app.get('*', (req, res) => {
    ut.log(`|> ${API_NAME} received request from ${req.hostname}`);
    // @ts-ignore
    ut.log(req.headers);
    ut.log(req.query);
    // Set headers according to query parameters
    res.set({ 'Content-Type': 'text/html' })
    req.query.for === "download" && res.set({ 'Content-Type': 'application/sql' });
    // Read SQL snippet file
    fs.readFile(path.join(__dirname, 'Northwind.sql'), (err, sqlText) => {
        if (err) {
            console.error('-< ERROR:', err);
            res.status(500);
            res.send(err);
            res.end();
        } else {
            console.log('-> SQL Snippet Served.');
            res.status(200);
            // Wrap SQL query snippet according to query parameter
            req.query.for === "frame" ?
                res.send("<code><pre>" + sqlText + "</pre></code>") :
                res.send(sqlText);
            res.end();
        }
    });
});

module.exports = app;
2