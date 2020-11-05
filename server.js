const express = require("express");
const orm = require("./config/orm.js");



 orm.insert("burgers", inputName, inputBool, function(data){
    console.log(data);
});


