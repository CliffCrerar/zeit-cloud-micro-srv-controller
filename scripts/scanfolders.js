const fs = require( 'fs' );
const path = require( 'path' );

fs.writeFileSync(
    JSON.stringify(

        path.join( process.cwd(), '/scripts/folders.json' ),

    ),
    fs.readdirSync( process.cwd() )
);