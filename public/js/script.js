$(function(){
	var socket = io.connect();
	var $form = $('.form');
	var $username = $('#name');
	var $lastname = $('#lastname');
	var $email = $('#email');
	var $age = $('#age');
	var $state = $('.state');

	$form.submit((e) => {
		
		e.preventDefault();

		$state.html(' ');

		socket.emit('send', {
			name:$username.val(),
			lastname:$lastname.val(),
			email:$email.val(),
			age:$age.val()
		});

		$form[0].reset();

		$state.html('Данные отправлены на сервер');
	})
});

$(function(){
	var socket = io.connect();
	var $info = $('.info');

	socket.on('transmit user', data => {
		console.log(data);
		socket.emit('request all users');
	});

	socket.emit('request all users');

	socket.on('transmit users', users => {
		console.log(users);
		$info.html('');
		
		for(let user of users) {
			$info.append('<ul class="info__users">' + '<li>' + 'Имя: ' + user.name + '</li>' + '<li>' + 'Фамилия: ' + user.lastname + '</li>' + '<li>' + 'E-mail: ' + user.email + '</li>' + '<li>' + 'Возраст: ' + user.age + ' лет' + '</li>' + '</ul>');
		}
	})
});