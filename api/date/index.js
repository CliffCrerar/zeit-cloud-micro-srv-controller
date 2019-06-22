const express = require( 'express' );
const helmet = require( 'helmet' );
const moment = require( 'moment' );

const app = express( );

app.use( helmet( ) );

app.get( '*', ( req, res ) => {
    console.log( 'received a date request from client' );

    res.set( 'Content-Type', 'text/html' );
    const currentTime = moment( ).format( 'MMMM Do YYYY, h:mm:ss a' );
    res.status( 200 ).send( currentTime );
} );

module.exports = app;