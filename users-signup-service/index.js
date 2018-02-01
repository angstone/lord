const micro = require('@angstone/microservice').create().addProcedure({
	topic: 'users',
	name: 'signup',
	rules: require('../rules/signup'),
	procedure: require('./signup-procedure.js'),
	mocked: {
		name: 'Mocked Name',
		login: 'mocked_login',
		display_name: null,
		img: 'http://farm4.static.flickr.com/3167/2632250296_3990f79686.jpg',
	},
}).start();
