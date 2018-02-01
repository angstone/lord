'use strict';

module.exports = [
  {
    route: '/ping',
    get: {topic: 'system', cmd: 'ping'},
  },
  {
    route: '/signup',
    post: {topic: 'users', cmd: 'signup'},
  },
];
