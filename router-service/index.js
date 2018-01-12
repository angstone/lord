const micro = require('@angstone/microservice').create();

micro.express_app = require('express')();
micro.express_port = process.env.PORT || 3000;
micro.express_routes = require('./routes');

micro.express_routes(micro);

micro.start(()=>{

  micro.express_app.listen(micro.express_port);

});
