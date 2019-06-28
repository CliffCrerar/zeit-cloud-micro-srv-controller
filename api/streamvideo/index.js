// @ts-ignore
const API_NAME = 'VIDEO STREAMING';
// @ts-ignore
const express = require('express');
// @ts-ignore
const helmet = require('helmet');
//const fs = require('fs');
//const path = require('path');
const ut = require('util');
const app = express();
//const cors = require('cors');

// @ts-ignore
app.use(helmet());
// @ts-ignore

ut.log(`|>-> INIT API: ${ API_NAME }`);

app.get('*', (req, res) => {
    ut.log(`|> ${ API_NAME } received request from ${ req.hostname }`);
    ut.log('\n REQUEST HEADERS: ', req.headers, '\n');
    //console.log('req.query.requestAsset: ', req.query.requestAsset);
    req.accepts(['*/*']);
    // res.type('html');
    //res.status(200);
    //res.send('yes please');
    //res.end();
    streamingResponder(req, res);
    //next();
})

function streamingResponder(req, res) {
    ut.log('Passed to streaming responder')
    ut.log('Requested Asset:', req.query.requestedAsset);
    //res.set('ContentType', 'text/html');
    // res.type('html');
    res.status(200)
        //res.send('Lekke poes')
        //res.end();
    links()[req.query.requestedAsset].pipe(res);

}

function links() {
    return {
        airportAerialView: require('fs').createReadStream('https://storage.cloud.google.com/cdn_cliff_crerar_tk/videossets/videobackground1.mp4')
    }
}

module.exports = app;