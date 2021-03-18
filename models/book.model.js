//Mongooose Schema

const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({

    //Objects
    username: {
        type: String,
        required: 'The field is required.',
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
mongoose.model('Book', bookSchema);