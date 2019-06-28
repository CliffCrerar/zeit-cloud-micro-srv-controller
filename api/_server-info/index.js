// @ts-nocheck
/**
 * License: MIT
 *
 * SERVERLESS TEST
 * @summary Uses moment to test serverless API.
 * @author Cliff Crerar
 * Created at     : 2019-06-25 19:15:02 
 * Last modified  : 2019-06-26 03:31:31
 */
const API_NAME = 'DATE TEST';
const express = require( 'express' );
const helmet = require( 'helmet' );
const moment = require( 'moment' );
const ut = require( 'util' );
const app = express( );

const fs = require( 'fs' );
const path = require( 'path' );

app.use( helmet( ) );

ut.log( `|>-> INIT API: ${API_NAME}` );

app.get( '*', ( req, res ) => {
    ut.log( `|> ${API_NAME} received request from ${req.hostname}` );
    res.set( 'Content-Type', 'applicaiton/json' );
    var serverInfo = {
        currentTime: moment( ).format( 'MMMM Do YYYY, h:mm:ss a' ),
        rawHeaders: req.headers,
        response: { statusCode: res.statusCode, statusMessage: res.statusMessage }
    };
    // fs.writeFile( path.join( __dirname, 'requestobj.txt' ), { encoding: 'utf8', flag: 'w' }, req, ( err ) => {
    //     if ( err ) { res.status( 500 ).send( err ).end } else { res.send( 200 ).send( serverInfo ).end( ) };
    // } )
    res.status( 200 ).send( serverInfo );
} );

module.exports = app;