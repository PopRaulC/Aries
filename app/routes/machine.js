'use strict'

const express = require('express');
const router = express.Router();
const machineCtrl = require('../controllers/machine');
const commonCtrl = require('../controllers/commonCtrl');


function isAdmin(req, res, next) {
    if(true){
        console.log('Only Admin');
        next();
    } else {
        next(err);
    }
}


router.get('/machine', machineCtrl.getMachine, commonCtrl.responseToJSON('machine'));
router.post('/machine', machineCtrl.createMachine, commonCtrl.responseToJSON('machine'));



module.exports = router;
