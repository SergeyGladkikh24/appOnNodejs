"use strict";

const
	mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const UsersSchema = new Schema({
	name:{type: String},
	lastname:{type: String},
	email:{type: String},
	age: {type: Number}
},{
	versionKey: false,
	collection: "UsersCollection"
}
);

module.exports = mongoose.model('UsersModel', UsersSchema);