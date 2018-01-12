const micro = require('@angstone/microservice').create();

micro.add({topic: 'system', cmd: 'ping'}, (req)=>{
	return {result: 'pong'};
})

micro.start();
