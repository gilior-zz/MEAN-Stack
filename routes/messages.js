var express = require('express')
var jwt = require('jsonwebtoken')
var Message = require('../models/messages')
var helper = require('../models/mng-helper')
var router = express.Router();
var User=require('../models/user')

router.get('/', (req, res, next) => {
    // Message.find((err, msgs) => {
    //     if (err) return res.status(500).json(err)
    //     res.status(200).json(msgs)
    // })

    Message.find().exec((err, msgs) => {
        if (err) return res.status(500).json(err)
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
            return res.status(401).json({msg: 'wrong tkn', err: err})
        }
    }
)

router.post('/', (req, res, next) => {
    var decoded = jwt.decode(req.query.tkn);
    User.findById(decoded.user._id, (err, user) => {
        if (err) return res.status(404).json({msg: 'couldnt find user', err: err})
        var msg = new Message({
            content: req.body.content,
            user: user
        });
        msg.save(function (err, saveRes) {
            if (err)
                return res.status(500).json({title: 'err occured', err: err})
            user.messages.push(msg);
            user.save((err, savedUser) => {
                if (err) return res.status(500).json({msg: 'couldnt add new msg to user', err: err})
                res.status(200).json({msg: 'saved', obj: saveRes})
            })

        })
    })

})

router.patch('/:id', (req, res, next) => {
    Message.findById(req.params.id).exec((err, msg) => {
        if (err) return res.status(500).json(err)
        if (!msg) return res.status(404).json({
            title: 'no message found'
            , err: 'no message found'
        })
        msg.content = req.body.content;
        msg.save((err, savedMsg) => {
            if (err)
                return res.status(500).json(err)
            res.status(200).json({msg: 'updated', obj: savedMsg})
        })
    })
})

router.delete('/:id', (req, res, next) => {
    Message.findById(req.params.id, (err, msg) => {
        if (err) return res.status(500).json({err: err})
        if (!msg) return res.status(404).json({err: 'msg not found'})
        msg.remove((err, delRes) => {
            if (err) return res.status(500).json({err: 'oops couldnt delete msg'})
            res.status(200).json({msg: 'deleted msg', obj: delRes})
        })
    })
})


module.exports = router;
