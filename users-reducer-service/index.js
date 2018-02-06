const micro = require('@angstone/microservice').create()
	.addProcedure({
    name: 'users reducer',
    auto_add: false,
    load: ['reducer'],
    start: function() {
      this.load.reducer.redux([{
		    stream: 'users',
		    type: 'signup',
		    run: function(payload, cb) {
		      cb(null, payload);
		    },
		  }]);
    }
  })
	.start();
