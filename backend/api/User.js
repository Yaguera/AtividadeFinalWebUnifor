const express = require('express');
const router = express.Router();


// mongodb user model
const User = require('./../models/User');

// Password handler
const bcrypt = require('bcrypt');

// Signup

router.post('/signup', (req, res) => {
    let {email, name, password} = req.body;
    email = email.trim();
    name = name.trim();
    password = password.trim();

    if(email == "" || name == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields"
        });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        });
    } else if (!/^[a-zA-Z]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        });
    } else if (password.length < 8) {
        res.json({
            status: "FAILED",
            message: "Password is too short"
        });
    } else {
        // Checking if user already exists
        User.find({email}).then(result => {
            if (result.length) {
                // A user already exists
                res.json({
                    status: "FAILED",
                    message: "User with the provided email already exists"
                });
            } else {
                // try to create new user

                // Password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        email,
                        name,
                        password: hashedPassword
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            menssage: "Signup successful",
                            data: result,
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while saving user account"
                    })
                })
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while hashing password"
                    })
                })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occurred while checking for existing user"
            });
        })
    }

});


// Signin
router.post('/signin', (req, res) => {
    let {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if (email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty credentials supplied"
        })
    } else {
        // Check if user exist
        User.find({email})
        .then(data => {
            if (data.length) {
                // User exists

                const hashedPassword = data[0].password;
                bcrypt.compare(password, hashedPassword).then(result => {
                    if (result) {
                        // Password match
                        res.json({
                            status: "SUCCESS",
                            message: "Singin successful",
                            data: data
                        })
                    } else {
                        res.json({
                            status: "FAILED",
                            message: "Invalid password entered"
                        })
                    }
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while comparing passwords"
                    })
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "Invalid credentials entered"
                })
            }
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurrend while checking for existing user"
            })
        })
    }
});

module.exports = router;