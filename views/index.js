const micro = require('@angstone/microservice').create();

micro.addViews([{
	models: ['user'],
	vent: ['users'],
	sights: {
		id: function(pars, models, cb) {
			models.user.create().findOne({ _id: pars.id }, cb);
		}
	}
}]);

micro.start();
