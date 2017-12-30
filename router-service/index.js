const micro = require('@angstone/microservice');

const config = {
  adapter: require('seneca-web-adapter-express'),
  context: require('express')()
    .use(require('body-parser').json()),
  routes: require('./routes')
}

micro.seneca.use(require('seneca-web'), config).ready(() => {
  micro.app = micro.seneca.export('web/context')();
  micro.app.listen('3000', (err) => {
    console.log(err || 'server started on: 3000')
  })
});

micro.start();
