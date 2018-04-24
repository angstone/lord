const micro = require('@angstone/microservice').create();

micro.add('ping', req=>{ return 'pong'; });

micro.addOperator({ action: 'user_signup' });

micro.start();
