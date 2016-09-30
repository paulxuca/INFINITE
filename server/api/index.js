const router = require('express').Router(); // eslint-disable-line new-cap
const auth = require('./routes/auth');

router.post('/auth/register', auth.registerUser);
router.post('/auth/login', auth.loginUser);

module.exports = router;
