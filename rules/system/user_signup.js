const msg = require('./user_signup_messages');

let rules = {};

rules.models = ['user'];

rules.pre_validation = (op, cb) => {
  if(!op.data)
    return cb(null, msg.NO_PAYLOAD);

  if(!op.data.name)
    return cb(null, msg.NO_NAME);

  if(!op.data.login)
    return cb(null, msg.NO_LOGIN);

  if(!op.data.password)
    return cb(null, msg.NO_PASSWORD);

  if(!op.data.password_confirmation)
    return cb(null, msg.NO_PASSWORD_CONFIRMATION);

  // enshures 2 words
  if( !/\b\w+\b(?:.*?\b\w+\b){1}/.test(op.data.name) )
    return cb(null, msg.WRONG_NAME);

  // enshures 3 letter
  if( !/(.*[a-zA-Z]){3}/.test(op.data.name) )
    return cb(null, msg.WRONG_NAME);

  // enshures 6 digits regular login
  if( !/^\w{6,}$/.test(op.data.login) )
    return cb(null, msg.WRONG_LOGIN);

  // enshures 8 digits password
  if( !/^\S{8,}$/.test(op.data.password) )
    return cb(null, msg.WRONG_PASSWORD);

  if(op.data.password != op.data.password_confirmation)
    return cb(null, msg.WRONG_PASSWORD_CONFIRMATION);

  return cb(null, null);

};

rules.validation = function(op, cb) {
  this.models.user.create(op.data).findByLogin((err, taken)=>{
    if(err) cb('INTERNAL ERROR');
    else if(taken) cb(null, msg.LOGIN_TAKEN);
    else cb(null, null);
  });
};

module.exports = rules;
