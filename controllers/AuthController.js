const User = require('../models/User');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ error: 'Invalid login details' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.json({ error: 'Invalid login details' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, 'secret');
    res.json({ success: { token, user: { id: user._id, email: user.email } } });
  } catch (err) {
    res.json({ error: err });
  }
};

exports.register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
      balance: req.body.balance,
    });
    res.json({ success: 'User registration successful' });
  } catch (err) {
    res.json({ error: err });
  }
};
