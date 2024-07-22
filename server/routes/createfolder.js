const express = require('express');
const router = express.Router();
const {newfolder} = require('../controller/foldercontroller.js');

router.post('/createfolder',newfolder);
// router.delete('/deletefolder',deletefolder());

module.exports = router;