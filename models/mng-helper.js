var mngs = require('mongoose')
var unique = require('mongoose-unique-validator')
var Schema = mngs.Schema;
var obj = {
    schemaCreator: function (obj, name,) {
        var schema = new Schema(obj);
        schema.plugin(unique);
        return mngs.model(name, schema);
    },
    schema: Schema,
    save: function (obj) {
        obj.save()
    },
    findOne: function (obj) {
        return obj.findOne();
    },
    getAll:  function (obj) {
           return   obj.find();

    }


}

module.exports = obj;
