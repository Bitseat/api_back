const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* Defining collection for Employees */ 
let Business = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile_number: {
        type: String
    },
    skills: {
        type: Array
    },
    college_name: {
        type: Array
    },
    degree: {
        type: Array
    },
    designation: {
        type: Array
    },
    experience: {
        type: Array
    },
    company_names: {
        type: Array
    },
    avatar:{
        type: Array
    }
},
    {
        collection: 'users'
    });

    module.exports = mongoose.model('Business', Business);