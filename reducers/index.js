const micro = require('@angstone/microservice').create();

micro.addReducers([
	{
    action: 'user_signup',
		load: ['streamListener', 'error'],
    run: function(event, cb) {
			this.load.streamListener.backFrom(event.eventNumber, 30, (result)=>{
				if(result.error) cb(this.load.error(result.error));
				else this.proceedExamination(event, result.events, cb);
			});
    },
		proceedExamination: function(event_came, events_got, cb) {
			let count_sames = 0;
			events_got.forEach(event_got=>{
				if(event_got.data && event_got.data.login && event_got.data.login==event_came.data.login) count_sames++;
			});
			if(count_sames<=1) cb(null);
			else cb(this.load.error('LOGIN TAKEN'));
		},
	}
]);

micro.start();
