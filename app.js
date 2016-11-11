const express = require('express')
const MongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/movies"
const PORT = 3000;

const app = express();

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("connected to DB...")

	app.get('/movies', (req, res) => {

		const limit = 10;
		const page = 3;
		const skip = limit*page;

		db.collection("movies")
			.find( { }, { title: 1, _id: 0 } )
			.sort( { title:1 } )
			.limit( 5 )
			.skip( skip )
			.toArray()
			//.then( movies => movies.map( m => m.title )  )
			.then( data => res.json(data) )
			.then( () => db.close() )

	})

})

app.listen(PORT, () => `Listening on port ${PORT}...`)