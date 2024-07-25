const express = require('express');

const { login, signup, Updateuser } = require('../controller/usercontroller');
const router = express.Router();

router.post('/login', login());
router.post('/signup', signup());
router.put('/update/:id', Updateuser());

module.exports = router;
