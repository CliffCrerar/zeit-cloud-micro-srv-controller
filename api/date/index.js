const express = require( 'express' );
const helmet = require( 'helmet' );
const moment = require( 'moment' );

const app = express();

app.use( helmet() );

function unpackRequest( r ) {
  console.log( 'r: ', r );

}

app.get( '*', ( req, res ) => {
  unpackRequest( req )
  res.set( 'Content-Type', 'text/html' );
  const currentTime = moment().format( 'MMMM Do YYYY, h:mm:ss a' );
  res.status( 200 ).send( currentTime );
} );

module.exports = app;
