const express = require('express');
const router = express.Router();

const {GetTypebots, CreateTypebot, UpdateTypebot, DeleteTypebot} = require('../controller/typebotcontroller');

router.get('/getTypebots/:id', GetTypebots());

router.post('/saveTypebot', CreateTypebot());
router.put('/editTypebot/:id', UpdateTypebot());
router.delete('/deleteTypebot/:id', DeleteTypebot());

module.exports = router;