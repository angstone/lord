const signup_procedure = {

  create: function(signup_rules) {
    //this.micro = micro;
    this.signup_rules = signup_rules;
    //this.req = req;
    //this.cb = cb;
    this.op = {
      type: 'signup',
      stream: 'users'
    };
    this.err = false;
    return this;
  },

  start: function(req, cb) {
    this.op.payload = req.data;
    cb(null, {
  		name: req.data.name,
  		login: req.data.login,
  		display_name: null,
  		img: 'http://farm4.static.flickr.com/3167/2632250296_3990f79686.jpg',
  	});
  },

  /*
  start: function() {

    //pre-validate
    this.err = this.signup_rules.pre_validation(this.op);
    if(this.err) {
      this.res.sendError(this.err);
      return;
    }

    //authorize

    //validate

    //dispatch
    this.app.dispatcher.dispatch(this.op, (res, err) => this.afterDispatch(res, err) );
  },
  */

  /*
  afterDispatch: function(evt, err) {
    this.err = err;
    if(this.err) {
      this.res.sendError( this.err.toString() );
      return;
    }

    //confirm
    this.op.evt = evt;
    this.app.confirmer.confirm(this.op, (res, err) => this.afterConfirm(res, err) );
  },
  */

  /*
  afterConfirm: function(profile, err) {
    this.err = err;
    if(this.err) {
      this.res.sendError( this.err );
      return;
    }

    this.res.sendOk(profile);
  },
  */

};

module.exports = signup_procedure;

/*

this.res.sendOk({
  name: this.req.body.name,
  login: this.req.body.login,
  display_name: null,
  img: 'http://farm4.static.flickr.com/3167/2632250296_3990f79686.jpg',
});

*/
