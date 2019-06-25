const express = require( 'express' );
const helmet = require( 'helmet' );
const fs = require( 'fs' );
const path = require( 'path' );

const app = express();

app.use( helmet() );
app.get( '*', ( req, res ) => {
	console.log( 'received a date request from client' );
	res.set( 'Content-Type', 'application/sql' );
	fs.readFile( path.join( __dirname, 'Northwind.sql' ), ( err, data ) => {
		if ( err ) {
			console.error( '-< ERROR:', err );
			res.send( err );
			res.end();
		} else {
			console.log( '-> SQL Snippet Served' );
			res.send( data );
			res.end();
		}
	} );
} );

module.exports = app;