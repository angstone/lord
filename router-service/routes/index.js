const routes = [{
  pin: 'role:system,cmd:*',
  map: {
    ping: {
      GET: true,
      alias: '/ping'
    }
  }
}];

module.exports = routes;

/*

routes = [{
  pin: 'role:ping,cmd:*',
  //prefix: '/ping',
  //postfix: '/?param=true',
  map: {
    ping: {
      GET: true,
      alias: '/ping',
    },
  }
}]

this.act('role: web', {
		use: {
			prefix: '/products',
			pin: 	'role: products, cmd: *',
			map: {
				getProductById: { alias: '/:id' }
			}
		}
	});

  map: {
    home: {
      GET: true,
      POST: true,
      alias: '/home'
    },
    logout: {
      GET: true,
      redirect: '/'
    },
    profile: {
      GET: true,
      autoreply: false
    },
    login: {
      POST: true,
      auth: {
        strategy: 'local',
        pass: '/profile',
        fail: '/'
      }
    }
  }

  */
