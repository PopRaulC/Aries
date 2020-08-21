'use strict'

const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require("path");
const { pathToUpload } = require('../config');

const userCtrl = require('../controllers/usersCtrl');
const commonCtrl = require('../controllers/commonCtrl');
const config = require('../config');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, pathToUpload)
    },
    filename: function (req, file,cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});
const upload = multer({storage:storage});


router.post('/upload-profile', upload.single('profilePicture'), function(req, res, next) {
    res.send('Uploaded')
});

router.get('/download-image', function (req, res, next) {
    const pathToFile = `${pathToUpload}/1597822104230-machinery.jpg`
        res.download(pathToFile);
});
router.get('/users', userCtrl.getUsers, commonCtrl.responseToJSON('users'));

// router.get('/users', userCtrl.getUsers, function(req, res, next) {
//   res.json(req.resources['users']);
// });
router.post('/users', userCtrl.createUsers, commonCtrl.responseToJSON('users'));
router.delete('/users/:userId', userCtrl.getUserById, userCtrl.deleteUser, commonCtrl.responseToJSON('users'));
router.put('/users/:userId', userCtrl.updateUser, commonCtrl.responseToJSON('users'));


module.exports = router;
