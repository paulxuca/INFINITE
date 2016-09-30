const User = require('../models/user');

const registerUser = (req, res) => {
  const { email, password } = req.body;

  const preSaveQuery = User.findOne({ email }).exec();

  preSaveQuery
  .then((result) => {
    if (!result) {
      const newUser = new User({
        email,
        password,
      });

      newUser.save((err, nUser) => {
        if (err) res.status(400).json(err);
        res.status(200).json(nUser);
      });
    } else {
      res.status(403).json({ error: `User with email ${email} already exists!` });
    }
  })
  .catch((err) => {
    res.status(400).json(err);
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (!user) res.status(401).json({ error: `No user found with email ${email}!` });
    else {
      user.comparePassword(password, (passwordError, isMatch) => {
        if (!isMatch) res.status(401).json({ error: 'Incorrect password!' });
        else {
          res.status(200).json(user);
        }
      });
    }
  });
};


module.exports = {
  registerUser,
  loginUser,
};
