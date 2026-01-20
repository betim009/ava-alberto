const User = require('../models/User');

async function listUsers() {
  return User.find().lean();
}

async function createUser(payload) {
  return User.create(payload);
}

module.exports = {
  listUsers,
  createUser,
};
