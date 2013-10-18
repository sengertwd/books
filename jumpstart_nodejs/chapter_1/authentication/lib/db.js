var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud Database
var username = "foot",
	password = "password",
	address = "@ds049568.mongolab.com:49568/node-testing";
connect();

// Connect to mongo
function connect() {
	var url = 'mongodb://'+username+':'+password+address;
	mongoose.connect(url);
}
function disconnect(){
	mongoose.disconnect();
}