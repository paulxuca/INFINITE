const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    validate: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    required: true,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ['admin', 'editor', 'user'],
    default: 'user',
  },
});

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, (saltingError, salt) => {
    if (saltingError) {
      return next(saltingError);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      return next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
