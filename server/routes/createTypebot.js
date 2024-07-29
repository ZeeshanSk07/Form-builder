const express = require('express');
const router = express.Router();

const {GetTypebots, GetshareBot, CreateTypebot, UpdateTypebot, DeleteTypebot} = require('../controller/typebotcontroller');

router.get('/getTypebots/:id', GetTypebots());
router.get('/getsharebot/:id', GetshareBot());

router.post('/saveTypebot', CreateTypebot());
router.put('/editTypebot/:id', UpdateTypebot());
router.delete('/deleteTypebot/:id', DeleteTypebot());

module.exports = router;