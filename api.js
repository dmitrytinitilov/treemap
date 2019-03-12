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

	return app
}