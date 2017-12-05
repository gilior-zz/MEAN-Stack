var express = require('express')
var jwt = require('jsonwebtoken')
var Message = require('../models/messages')
var helper = require('../models/mng-helper')
var router = express.Router();
var User = require('../models/user')

router.get('/', (req, res, next) => {
    // Message.find((err, msgs) => {
    //     if (err) return res.status(500).json(err)
    //     res.status(200).json(msgs)
    // })

    Message.find().populate('user', 'firstName').exec((err, msgs) => {
        if (err) return res.status(500).json({title: 'invalid data', error: err})
        res.status(200).json({
            msg: 'getAll good',
            obj: msgs
        })
    })
})

router.use('/', (req, res, next) => {
        try {
            var user = jwt.verify(req.query.tkn, 'secret');
            next();
        } catch (err) {
            return res.status(401).json({title: 'jwt error', err: {message: 'invalid token', error: err}})
        }
    }
)

router.post('/', (req, res, next) => {
    var decoded = jwt.decode(req.query.tkn);
    User.findById(decoded.user._id, (err, user) => {
        if (err) return res.status(404).json({title: 'couldnt find user', error: err})
        var msg = new Message({
            content: req.body.content,
            user: user
        });
        msg.save(function (err, saveRes) {
            if (err) return res.status(500).json({title: 'err occured', error: err})
            user.messages.push(msg);
            user.save((err, savedUser) => {
                if (err) return res.status(500).json({title: 'couldnt add new msg to user', error: err})
                res.status(200).json({msg: 'saved', obj: saveRes})
            })

        })
    })

})

router.patch('/:id', (req, res, next) => {
    var decoded = jwt.decode(req.query.tkn);
    Message.findById(req.params.id).exec((err, msg) => {
        if (err) return res.status(500).json({title: 'msg finot found on DB', error: err})
        if (!msg) return res.status(404).json({
            title: 'no message found', error: {message: 'no message found'}
        })
        if (msg.user != decoded.user._id) return res.status(401).json({
            title: 'not allowed usr',
            error: {message: 'not allowed usr'}
        })
        msg.content = req.body.content;
        msg.save((err, savedMsg) => {
            if (err)
                return res.status(500).json({
                    title: 'save prb',
                    error: {err}
                })
            res.status(200).json({msg: 'updated', obj: savedMsg})
        })
    })
})

router.delete('/:id', (req, res, next) => {
    var decoded = jwt.decode(req.query.tkn);
    Message.findById(req.params.id, (err, msg) => {
        if (err) return res.status(500).json({
            title: 'not found msg',
            error: {err}
        })
        if (!msg) return res.status(404).json({
            title: 'not found msg',
            error: {message:'not found msg'}
        })
        if (msg.user != decoded.user._id) return res.status(401).json({msg: 'not allowed usr', obj: decoded.user._id})
        msg.remove((err, delRes) => {
            if (err) return res.status(500).json({
                title: 'couldnt delete msg',
                error: {err}
            })
            res.status(200).json({msg: 'deleted msg', obj: delRes})
        })
    })
})


module.exports = router;
