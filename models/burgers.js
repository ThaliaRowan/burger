const orm = require("../config/orm.js");


var burger = {
    select: function(cb) {
      orm.select("burgers", function(res) {
        cb(res);
      });
    },
    insert: function(inputName, inputBool, cb) {
      orm.insert("burgers", inputName, inputBool, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  


module.exports = burger;