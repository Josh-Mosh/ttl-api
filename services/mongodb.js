var mongoose = require('mongoose'),
    connections = {
      development: 'mongodb://' + (process.env.LOCAL_MONGO_TTL || 'localhost') + '/ttl',
      test: 'mongodb://' + (process.env.LOCAL_MONGO_TTL || 'localhost') + '/ttl_tests',
      production: process.env.MONGODB_URI
    };

function connect(env, url) {
  if (url) {
    mongoose.connect(url);
  } else {
    mongoose.connect(connections[env]);
  }

  return mongoose.connection;
}

module.exports = { connect: connect };
