'use strict';

module.exports = (micro) => {

  // todoList Routes
  micro.express_app.route('/ping')
    .get((req, res) => {
      micro.act({topic: 'system', cmd: 'ping'}, (err, ans)=>{
    		if(err)
          res.send(err);
        else
          res.json(ans);
    	});
    });

};
