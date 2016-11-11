const ObjectID = require('mongodb').ObjectID;

function getMovieByID(db, req, res) {

	// 5692a51b24de1e0ce2dfdc79
	// 5692a51a24de1e0ce2dfdc77
	const { skip, limit, projection } = req
	const { id } = req.params;

	console.log( id );
	console.log( ObjectID )

	db.collection("movieDetails")
		.find( { _id: ObjectID(id) }, projection )
		//.sort( { title:1 } )
		//.limit( limit )
		//.skip( skip )
		.toArray()
		//.then( movies => movies.map( m => m.title )  )
		.then( data => res.json(data) )
		//.then( () => db.close() )
		.catch( err => console.log(err) )

}

module.exports = getMovieByID;