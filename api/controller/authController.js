const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUser = async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (result) {
      const token = jwt.sign(
        {
          data: { _id: user._id },
        },
        process.env.SECRET_KEY,
        {
          expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
        }
      );
      return res.header('auth-token', token).json({
        token,
        message: 'login successful',
        user: user.role,
      });
    } else {
      return res.status(403).json({ message: 'Incorrect Password...' });
    }
  });
};

exports.addUser = async (req, res) => {
  // const user = await User.findOne({ email: req.body.email });
  console.log(req.body);
  // if (user) {
  //   return res.status(409).json({ message: 'email already exist' });
  // }
  try {
    const newUser = new User({
      email: req.body.email,
      // username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
      role: req.body.role,
    });
    const user = await User.create(newUser);
    res.json({
      message: 'Signup Successful',
      user: user,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
