const express = require('express')
const MongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/movies"

MongoClient.connect(url, (err, db) => {
	if (err) throw err;
	console.log("connected to DB...")
})