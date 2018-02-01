const micro = require('@angstone/microservice').create();

micro.express_app = require('express')();
micro.express_app.use(require('body-parser').json());
micro.express_port = process.env.PORT || 3000;

require('../routes').forEach(route => {
  const rt = micro.express_app.route(route.route);

  // add get route
  if(route.get) {
    rt.get((req, res) => {
      micro.act({topic: route.get.topic, cmd: route.get.cmd}, (err, ans) => {
        if(err)
          res.send(err);
        else
          res.json(ans);
      });
    });
  };

  // add post route
  if(route.post) {
    rt.post((req, res) => {
      const data = req.body;
      micro.act({topic: route.post.topic, cmd: route.post.cmd, data}, (err, ans) => {
        if(err)
          res.send(err);
        else
          res.json(ans);
      });
    });
  };

});

/*micro.express_app.route('/ping')
{
  route: './ping',
  get: {topic: 'system', cmd: 'ping'},
},*/

micro.start(()=>{
  micro.express_app.listen(micro.express_port);
});
