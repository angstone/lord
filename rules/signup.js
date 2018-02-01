const msg = require('./signup_messages');

let rules = {};

rules.pre_validation = (op) => {
  if(!op.payload)
    return msg.NO_PAYLOAD;

  if(!op.payload.name)
    return msg.NO_NAME;

  if(!op.payload.login)
    return msg.NO_LOGIN;

  if(!op.payload.password)
    return msg.NO_PASSWORD;

  if(!op.payload.password_confirmation)
    return msg.NO_PASSWORD_CONFIRMATION;

  // enshures 2 words
  if( !/\b\w+\b(?:.*?\b\w+\b){1}/.test(op.payload.name) )
    return msg.WRONG_NAME;

  // enshures 3 letter
  if( !/(.*[a-zA-Z]){3}/.test(op.payload.name) )
    return msg.WRONG_NAME;

  // enshures 6 digits regular login
  if( !/^\w{6,}$/.test(op.payload.login) )
    return msg.WRONG_LOGIN;

  // enshures 8 digits password
  if( !/^\S{8,}$/.test(op.payload.password) )
    return msg.WRONG_PASSWORD;

  if(op.payload.password != op.payload.password_confirmation)
    return msg.WRONG_PASSWORD_CONFIRMATION;

  return null;

};

module.exports = rules;
