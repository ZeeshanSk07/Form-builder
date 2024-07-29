const express = require('express');
const router = express.Router();
const { sendResponse, getResponse } = require('../controller/rescontroller');

router.post('/bot/:id', sendResponse);
router.get('/getResponse/:id', getResponse);

module.exports = router;