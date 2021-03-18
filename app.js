//Experess server

require('./models/db');
const express  = require('express');
const exphbs = require('express-handlebars')

const path = require('path');
const bodyParser = require('body-parser');

const execFile = require('child_process').execFile;

const userController = require('./controllers/userController')
const bookController = require('./controllers/bookController')
 
const port = 8000;

// Start mongod || Server
execFile("C:/Program Files/MongoDB/Server/4.0/bin/mongod.exe", (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log("Mongod Started : - "+stdout);
});

//CREATE APP
let app = express();


//EXPRESS STATICS FILE
app.use('/', express.static(path.join(__dirname, '/views/')));


// body-parser
app.use(express.urlencoded({ extended: true}));

app.engine('hbs', exphbs({ extname: 'hbs', runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true, }, defaultLayout: 'mainLayout', partialsDir: __dirname + '/views/layouts/partials/', layoutDir: __dirname + '/views/layouts/' }));




// SERVER START
app.listen(port, () => {
    console.log('Connection Success ! at Port ' + port);
})


//END-POINTS
app.use('/user', userController);
app.use('/book', bookController);










