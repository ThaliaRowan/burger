const orm = require("../config/orm.js");



 orm.select("burgers", function(data){
    console.log(data);
});




module.exports = burger;