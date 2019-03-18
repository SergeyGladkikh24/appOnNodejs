'use strict'

const UsersModel = require('./models/users.model');

module.exports = io => {
	io.on('connection',(socket) => {
		console.log('Успешное подключение');

		socket.on('send',(data) => {

			UsersModel.create(data, err => {
				if(err) return console.log('UsersModel',err);

				io.sockets.emit('transmit user', data);
			});
		});

		socket.on('request all users',() => {
			UsersModel.find({}).lean().exec((err,users) => {
				if(!err) {
					socket.emit('transmit users',users)
				}
			})
		})
	})
}