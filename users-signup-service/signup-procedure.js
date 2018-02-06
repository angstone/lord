const signup_procedure = {
  topic: 'users',
	name: 'signup',
	rules: require('../rules/signup'),
	load: ['operator','error'],
	mocked: {
		name: 'Mocked Name',
		login: 'mocked_login',
		display_name: null,
		img: 'http://farm4.static.flickr.com/3167/2632250296_3990f79686.jpg',
	},
  run: function(req, cb) {

    const op = {
      type: 'signup',
      stream: 'users',
      payload: req.data
    };

    // pre-validate
    const err = this.rules.pre_validation(op);
    if(err) return cb(this.load.error(err), null);

    //authorize

    //validate

    //operate
    this.load.operator.operate(op, cb);
  }
};

module.exports = signup_procedure;
