module.exports = {
  schema: {
    name: String,
    login: String,
    password: String,
  },
  methods: {
    findByLogin: function(cb) {
      this.Model.findOne({ login: this.login }, cb);
    },
  },
};
