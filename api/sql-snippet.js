const express = require( 'express' );
const helmet = require( 'helmet' );
const moment = require( 'moment' );
const fs = require( 'fs' );
const path = require('path');
const ut = util


const app = express();


app.use( helmet() );

app.get( '/sqlsnip', ( req, res ) => {
    res.set( 'Content-Type', 'application/sql' );
    var file = fs.readFileSync(path.join(process.cwd(),'sql-snippet/northwind.sql'));
    const currentTime = moment().format( 'MMMM Do YYYY, h:mm:ss a' );
    res.status( 200 ).send( currentTime,file );
} );

module.exports = app;