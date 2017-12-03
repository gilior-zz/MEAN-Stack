var express = require('express')
var Message = require('../models/messages')
var router = express.Router();

router.post('/', (req, res, next) => {
    var msg = new Message({
        content: req.body.content
    });
    msg.save(function (err, res) {
        if (err)
            return res.status(500).json({title: 'err occured', err: err})
        rres.send(200).json({msg: 'saved', obj: res})
    })

})
