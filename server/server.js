const 
	express = require('express'),
	app = express(),
	path = require('path'),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server, {serveClient:true}),
	mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/users',{ useNewUrlParser: true });

	app.use('/public', express.static('../public'));

	app.get('/', (req,res) => {
		res.sendFile(path.join(__dirname,'..','views','index.html'));
	})

	app.get('/users', (req,res) => {
		res.sendFile(path.join(__dirname,'..','views','users.html'));
	})

	require('./socket')(io);

	server.listen(4000,() => {
		console.log('Starting server on the Node js');
	})

