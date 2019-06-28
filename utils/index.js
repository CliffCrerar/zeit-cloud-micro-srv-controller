// @ts-nocheck
/**
 * MIT
 *
 * App Utils
 *
 * @summary App utilities to be used by rest of serverless API's
 * @author Cliff Crerar
 *
 * Created at     : 2019-06-25 19:04:42
 * Last modified  : 2019-06-26 03:03:57
 */

const nodePath = require( 'path' );

const getutil = ( subPath ) => require( nodePath.join( __dirname, subPath ) );

const LOG = getutil( 'logger' );

module.exports = { LOG };