var mngsHelper = require('./mng-helper.js')
var mngs = require('mongoose')
var unique = require('mongoose-unique-validator')
var User = require('./user')
var Schema = mngs.Schema;

schema = new Schema({
    content: {type: String, required: true},
    user: {type: mngsHelper.schema.Types.ObjectId, ref: 'User'}
});
schema.plugin(unique);
var model = mngs.model('Message', schema);
schema.post('remove', (msg) => {
    User.findById(msg.user, (err, usr) => {
        if (usr && !err) {
            usr.messages.pull(msg)
            user.save();
        }

    })
})
module.exports = model;


