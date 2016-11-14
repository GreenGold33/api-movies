const express = require('express');

const getMovies = require('./handlers/getAll')
const getMoviesByGenre = require('./handlers/getByGenre')
const getMoviesByCountry = require('./handlers/getByCountry')

const router = express.Router();
//const app = express();

function getRouter(db) {

	router.get('/', getMovies.bind(null, db) )
	router.get('/genres/:genre', getMoviesByGenre.bind(null, db) )
	router.get('/countries/:country', getMoviesByCountry.bind(null, db))

	return router;

}

module.exports = getRouter;
