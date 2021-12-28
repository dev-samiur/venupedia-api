const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: string,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema, 'users');
