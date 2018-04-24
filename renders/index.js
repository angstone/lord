const micro = require('@angstone/microservice').create();

micro.addRenders([
	{
		models: ['user'],
    action: 'user_signup',
    run: function(event, cb) {
			this.models.user.create({
				id: event.eventNumber,
				name: event.data.name,
				login: event.data.login,
				password: event.data.password
			}).save(cb);
    },
	}
]);

micro.start();
