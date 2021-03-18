const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('User');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const path = require('path');

const JWT_SECRET = 'gsguyjiahhsAhuayyajoUI@#$%^&%%@!*uwjmwepm'


/***************** USER HOME REQUESTS ****************/
router.get('/', (req, res) => {
    res.sendStatus(200)
});



/***************** USER LOGIN REQUESTS ****************/

router.get('/login', (req, res) => {
    var user = new User();

    res.render('./layouts/user/login.hbs', {
        user: ""
    })
});

router.post('/login', (req, res) => {

    // Checks User is valid or not
    userAuthenticate(req, res);

});

async function userAuthenticate(req, res) {
    var hostURL = req.protocol + '://' + req.get('host');
    // var user = new User();


    const { username, password } = req.body;
    const user = await User.findOne({ username }).lean();

    if (!password) {
        // If Pasword is Invalid Or Empty  || Error
        return res.render('./layouts/user/login.hbs', {
            alert: 'Invalid Password !',
            user: req.body,
            alertStatus: 'show'
        })
        // return res.json({ status: 'error', error: 'Invalid Username/Password' });
    }

    console.log(username + password, user);
    if (!user) {
        // If Username is Invalid Or Empty  || Error
        return res.render('./layouts/user/login.hbs', {
            alert: 'Invalid Username !',
            user: req.body,
            alertStatus: 'show'
        })
        // return res.json({ status: 'error', error: 'Invalid Username/Password' });
    }
    const status = await bcrypt.compare(password, user.password);
    console.log(status);
    if (status) {
        //Username and password combination successfully
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
            },
            JWT_SECRET
        );

        return res.json({ status: 'ok', data: token });
    }

    // If Password is Invalid Error
    return res.render('./layouts/user/login.hbs', {
        alert: 'Invalid Username/Password !',
        user: req.body,
        alertStatus: 'show'
    })
    // res.json({ status: 'error', error: 'Invalid Username/Password' });

}




/**************** USER SIGN-UP REQUESTS *********************/
router.get('/signup', (req, res) => {
    var user = new User();

    return res.render('./layouts/user/signup.hbs', {
        user: ""

    })
});

router.post('/signup', (req, res) => {
    //save user 
    addUser(req, res);

});

async function addUser(req, res) {
    var hostURL = req.protocol + '://' + req.get('host');
    var user = new User();

    console.log(req.body);
    const password = req.body.password;
    console.log(password);
    if (!password) {
        // If Pasword is Invalid Or Empty  || Error
        return res.render('./layouts/user/signup.hbs', {
            alert: 'FIELD CANNOT BE EMPTY !',
            user: req.body,
            alertStatus: 'show'
        })
        // return res.json({ status: 'error', error: 'Invalid Username/Password' });
    }
    //Encrypt Password || Encode
    const passwordEncrypted = await bcrypt.hash(password, 10);
    console.log("Encrypted Password : " + passwordEncrypted);

    console.log(req.body);
    //Asign Values
    user.username = req.body.username;
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.password = passwordEncrypted;


    user.save((err, doc) => {
        if (!err) {
            console.log('Add User Sucessfully');
            res.redirect(hostURL + '/book/dashboard');

        } else {
            if (err.code === 11000) {
                res.render('./layouts/user/signup.hbs', {
                    alert: 'User is already exist!',
                    user: req.body,
                    alertStatus: 'show'
                });
            }

            //Form Validation
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);

                res.render('./layouts/user/signup.hbs', {
                    alert: 'Field Cannot Be Empty !',
                    user: req.body,
                    alertStatus: 'show'
                });

            } else
                console.log('Error in Add User : ' + err.code);
        }
    });
}




/***************** Form Validation ****************/

function handleValidationError(err, body) {

    for (const field in err.errors) {

        switch (err.errors[field].path) {
            case 'username':
                body['usernameError'] = err.errors[field].message;
                break;
            case 'fullname':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            case 'password':
                body['passwordError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}





module.exports = router;