const fs = require( 'fs' );
const path = require( 'path' );

/* ---------------- Image Server One-- ------------- */

/* -------------- Refresh online store ------------- */
const cwd = process.cwd();
console.log( 'process.cwd(): ', process.cwd() );
fs.readdirSync( cwd );
console.log( 'fs.readdirSync(dirToCheck);: ', fs.readdirSync( cwd ) );
const rootItems = fs.readdirSync( cwd );

const scanfolders = [ 'learnsql', 'testfolder' ]

scanfolders.forEach( ( folder ) => {
    console.log( 'folder: ', folder );

} )


rootItems.forEach( itm => {
    console.log( 'itm: ', itm );
    var isDir = fs.statSync( path.join( cwd, itm ) ).isDirectory();
    console.log( 'statSync: ', isDir );
    if ( isDir ) {
        scanNewLevel()
    }
} )

runNow();

function scanNewLevel() {

}

function runNow() {
    require( 'child_process' ).exec( 'now' );
}

/* -------------- Refresh online store ------------- */