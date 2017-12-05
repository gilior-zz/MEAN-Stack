var express = require('express');
var router = express.Router();
var mngs = require('mongoose')
var User = require('../models/user')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

router.post('/', (req, res, next) => {

    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pwd: bcrypt.hashSync(req.body.pwd, 10),
        email: req.body.email
    })

    user.save((err, user) => {
        if (err) return res.status(500).json({msg: 'not saved!', err: err})

        res.status(200).json({msg: 'user created', obj: user})
    })
})

router.post('/signin', (req,res,next) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err || !user) return res.status(401).json({msg: 'couldnt retreive user', err: err, obj: user})
        if (!bcrypt.compareSync(req.body.pwd, user.pwd)) return res.status(401).json({msg: 'invalid pwd'})
        var tkn = jwt.sign({user: user}, 'secret', {expiresIn: 7200})
        res.status(200).json({msg: 'logged in', obj: user, tkn: tkn})
    })
})

module.exports = router;