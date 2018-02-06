const micro = require('@angstone/microservice').create()
	.addProcedure(require('./signup-procedure.js'))
	.start();
