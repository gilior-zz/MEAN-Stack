var mngsHelper = require('./mng-helper.js')

var userModel = mngsHelper.schemaCreator({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    pwd:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    messages:[{type:mngsHelper.schema.Types.ObjectId,ref:'Meesage'}]
}, 'User')

module.exports = userModel;