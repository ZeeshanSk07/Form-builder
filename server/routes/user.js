const express = require('express');

const { login, signup, Updateuser} = require('../controller/usercontroller');
const { newTheme, GetTheme, SetTheme} = require('../controller/themecontroller');
const router = express.Router();

router.post('/login', login());
router.post('/signup', signup());
router.post('/theme', newTheme());

router.put('/update/:id', Updateuser());
router.put('/theme/:id',SetTheme());
router.get('/gettheme/:id', GetTheme());

module.exports = router;
