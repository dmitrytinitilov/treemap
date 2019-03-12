const util   = require('util');
const crypto = require('crypto');

var ObjectId = require('mongodb').ObjectID;

var tools = require('./tools');

module.exports = function(app, db) {

	var bodyParser = require('body-parser');
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
	   extended: true
	}));

	upload = require('express-fileupload');
	app.use(upload());

	app.get('/', async function(req,res){
		
		try {
			var hash_obj = await tools.checkHash(req,res);
			
			res.render('start',{events:local_events,hash_obj:hash_obj});
		} catch(e) {
			console.log('Error '+e);
		}
	})

	return app

}