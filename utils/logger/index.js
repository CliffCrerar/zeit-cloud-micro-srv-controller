/**
 * MIT
 *
 * LOGGER
 *
 * @summary This app is imported by all API's to log serverless activity
 * @author Cliff Crerar
 *
 * Created at     : 2019-06-25 19:01:17
 * Last modified  : 2019-06-25 19:10:38
 */

const util = require( 'util' );

function logger( msg ) {
	return util.log( msg );
}

let LOG = logger

module.exports = LOG;