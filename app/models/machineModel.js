'use strict'


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const machineSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: false
    },
    age: {
        type: Number,
    },
});

module.exports = mongoose.model('Machine', machineSchema, 'machines');
