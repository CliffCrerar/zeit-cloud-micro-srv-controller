/**
 * License: MIT
 *
 * LOGGING API
 *
 * @summary short description for the file
 * @author Cliff Crerar
 *
 * Created at     : 2019-06-25 23:15:48
 * Last modified  : 2019-06-26 02:30:16
 */

const express = require( 'express' );
const helmet = require( 'helmet' );
const app = express( );

app.use( helmet( ) );

app.get( '*', ( req, res ) => {
    res.set( 'Content-Type', 'application/javascript' );
    res.status( 200 ).send( logger ).end( );
} );

function logger( ) {
    console.log( "which dir am I in", process.cwd( ) );
    const fs = require( 'fs' );
    const path = require( 'path' );
}