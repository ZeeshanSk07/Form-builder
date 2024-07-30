const express = require('express');
const router = express.Router();
const { sendResponse, getResponse, setView , getViewCount} = require('../controller/rescontroller');

router.post('/bot/:id', sendResponse);
router.get('/getResponse/:id', getResponse);
router.post('/view', setView);
router.get('/getView/:id', getViewCount);


module.exports = router;