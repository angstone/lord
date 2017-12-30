const micro = require('@angstone/microservice');

micro.seneca.add('role:system, cmd:ping', (args, callback) => {
	callback(null, {result:'pong'});
});

micro.start();
