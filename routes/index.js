'use strict';

module.exports = [
  {
    route: '/ping',
    get: {action: 'ping'},
  },
  {
    route: '/user/signup',
    post: {action: 'user_signup'},
  },
];
