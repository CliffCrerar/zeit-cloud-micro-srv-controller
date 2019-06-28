( function( ) {
    fetch( '/api/_server-info' )
        .then( function( response ) {
            return response.json( );
        } )
        .then( function( response ) {
            console.log( 'response: ', response );
            document.querySelector( '.js-date' ).textContent = response.currentTime;
            displayHeaders( response );
            displayStatus( response )
        } );

    function displayHeaders( { rawHeaders } ) {

        const dispEl = document.createElement( 'div' );
        const displayObj = Object.entries( rawHeaders );
        dispEl.classList.add( 'header' )

        var headerElArr = [ ];
        // @ts-ignore
        Object.entries( rawHeaders ).forEach( header => {
            const thisEl = dispEl.cloneNode( );

            thisEl.innerHTML = `<span class="key">${header[0]}: </span><code class="value">${header[1]}</code>`
                //console.log( 'thisEl: ', thisEl );
            headerElArr.push( thisEl );

        } )

        var appendEl = document.getElementById( 'reqHeaders' );
        headerElArr.forEach( el => appendEl.appendChild( el ) );

    }

    function displayStatus( { response } ) {
        const appendEl = document.getElementById( 'resStatus' );
        const nArr = Object.entries( response );
        const newEl = document.createElement( 'h3' )
        appendEl.appendChild( newEl ).classList.add( 'header' );

        const append1 = document.createElement( 'span' );
        const append2 = document.createElement( 'span' );

        append1.classList.add( 'key' )
        append2.classList.add( 'value' )

        append1.innerHTML = nArr[ 0 ][ 0 ];
        append2.innerHTML = `<code>${nArr[ 0 ][ 1 ]}</code>`;

        newEl.appendChild( append1 );
        newEl.appendChild( append2 );
    }
} )( );