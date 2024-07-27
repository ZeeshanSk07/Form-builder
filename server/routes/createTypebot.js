const express = require('express');
const router = express.Router();

const {GetTypebots, CreateTypebot, UpdateTypebot} = require('../controller/typebotcontroller');

router.get('/getTypebots/:id', GetTypebots());
router.post('/saveTypebot', CreateTypebot());
router.put('/editTypebot/:id', UpdateTypebot());

module.exports = router;