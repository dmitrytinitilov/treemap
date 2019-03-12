const util   = require('util');
const crypto = require('crypto');

var ObjectId = require('mongodb').ObjectID;

var tools = require('./tools');

module.exports = function(app, db) {

	app.post('/api/template',async function(req,res){
		
		try {
			res.end('template');
		} catch(e) {
			console.log(e);
			res.end('error');
		}
	
	})

	app.get('/api/add_tree/:lat/:lng',async function(req,res){
		
		try {

			var lat = req.params.lat;
			var lng = req.params.lng;

			var trees = db.collection("trees");

			await loginpass.insertOne({lat:lat,lng:lng})

			res.end('template');
		} catch(e) {
			console.log(e);
			res.end('error');
		}
	
	})

	return app
}