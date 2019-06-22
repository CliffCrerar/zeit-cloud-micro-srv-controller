const fs = require( 'fs' );
//const {log} = require( 'util' )

module.exports = async function ( res ) {
	//log( 'Streaming now!' )
	await fs.createReadStream( './Northwind.sql' ).pipe( res );
	return;
}