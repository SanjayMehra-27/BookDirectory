//Mongooose Schema

const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    //Objects
    username: {
        type: String,
        required: 'The field is required.',
        index: { unique: true, dropDups: true}
    },
    fullname: {
        type: String,
        required: 'The field is required.',

    },
    email: {
        type: String,
        required: 'The field is required.',
    },

    password: {
        type: String,
        required: 'The field is required.',
    }

});


//Custom Validation for email


// Model
mongoose.model('User', userSchema);