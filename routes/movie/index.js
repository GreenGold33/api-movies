const express = require('express');
const getMovieById = require('./handlers/getMovieById')

const router = express.Router();

function getRouter(db) {
	router.get('/:id', getMovieById.bind(null, db) )
	return router;
}

module.exports = getRouter;
