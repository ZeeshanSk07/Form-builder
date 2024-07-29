const express = require('express');
const router = express.Router();
const { sendResponse } = require('../controller/rescontroller');

router.post('/bot/:id', sendResponse);

module.exports = router;