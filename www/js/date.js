(
	function main() {
		return fetch( '/api/date' )
			.then( function ( response ) {
				return response.text();
			} )
			.then( function ( date ) {
				document.querySelector( '.js-date' ).textContent = date;
			} );
	}

)()