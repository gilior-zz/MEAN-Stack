var mngsHelper = require('./mng-helper.js')
var messageModel = mngsHelper.schemaCreator({
    content: {type: String, required: true},
    user: {type: mngsHelper.schema.Types.ObjectId, ref: 'User'}
}, 'Message');
module.exports = messageModel;


