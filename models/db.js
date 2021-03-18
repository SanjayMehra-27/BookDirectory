const mongoose = require('mongoose');


// MONGOOSE CONNECTION
mongoose.connect('mongodb://localhost:27017/booksDB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Suceeded.'); }
    else { console.log('Error in DB connection : ' + err); }
});


//db.js
require('./user.model.js');
require('./book.model.js');