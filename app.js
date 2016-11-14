const express = require('express')
const MongoClient = require('mongodb').MongoClient

const prepareParams = require('./middleware/prepareParams')

const getRouterMovies = require('./routes/movies'); // router
const getRouterMovie = require('./routes/movie');

const url = "mongodb://localhost:27017/movies"
const PORT = 3000;

const app = express();

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("Connected to DB...")

	app.use( prepareParams )

	app.use( '/movies', getRouterMovies(db) )
	app.use( '/movie', getRouterMovie(db) )


})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )