const express = require('express');
const router = express.Router();
const { login, signup, Updateuser} = require('../controller/usercontroller');
const { newTheme, GetTheme, SetTheme} = require('../controller/themecontroller');


router.post('/log', login());
router.post('/register', signup());
router.post('/theme', newTheme());

router.put('/update/:id', Updateuser());
router.put('/theme/:id',SetTheme());
router.get('/gettheme/:id', GetTheme());


module.exports = router;