var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mngsHelper = require('../models/mng-helper.js')

//for node routing
// router.get('/', async function (req, res, next) {
//     try {
//         var user = await mngsHelper.findOne(User);
//
//         res.render('node', {email: user._doc.email});
//     }
//     catch (err) {
//         res.render('node', {email: err + ' !!!'});
//     }
//
// });

router.get('/', (req, res, next) => {
res.render('index')
    }
)

//for node routing
// router.post('/', function (req, res, next) {
//     var email = req.body.email;
//     var user = new User({
//         firstName: 'Max',
//         lastName: 'Maxim',
//         pwd: '123',
//         email: email
//     })
//     mngsHelper.save(user)
//     res.redirect('/');
// })

module.exports = router;
