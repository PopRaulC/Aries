'use strict'
const Machine = require('../models/machineModel');

module.exports = {
    getMachine,
    createMachine,
};



function getMachine(req, res, next) {
    Machine.find(function (err, result) {
        if (err) {
            console.log('err', err);
            return res.send('Error during get Machine')
        }

        req.resources.machine = result;
        next()
    })
}


function createMachine(req, res, next) {
    const machine = new Machine(req.body);

    machine.save(function (err, result) {
        if (err) {
            return next(err)
        }
        req.resources.machine = result;
        return next()
    });
}

function midd42(req, res, next) {
    console.log('midd 42');
    next()

}

