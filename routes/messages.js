var express = require('express')

var Message = require('../models/messages')
var helper = require('../models/mng-helper')
var router = express.Router();

router.post('/', (req, res, next) => {
    var msg = new Message({
        content: req.body.content
    });
    msg.save(function (err, saveRes) {
        if (err)
            return res.status(500).json({title: 'err occured', err: err})
        res.status(200).json({msg: 'saved', obj: saveRes})
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


module.exports = router;
