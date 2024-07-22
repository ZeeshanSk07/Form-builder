const express = require('express');
const router = express.Router();
const {newfolder, deletefolder, getfolders} = require('../controller/foldercontroller.js');

router.post('/createfolder',newfolder);
router.delete('/deletefolder/:id',deletefolder);
router.get('/getfolders', getfolders);

module.exports = router;