/*
 * Node.js
 */
var http  = require('http');

var server = http.createServer(function(req,res){
    mongo_save('Mouse',{name:'Takayuki',age:234,flag: false});
});
server.listen(8080);


/*
 * Mongo DB
 */

//Init
var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://localhost/test');// define schema

//Schema
var schema1 = new mongoose.Schema({name: String,age: Number,is_pockemon : Boolean});

//Save
function mongo_save(id, data){

    var model = db.model(id, getSchema(id));
    var obj = new model(data);
    obj.save();

    console.log('---Save');

    //Call find
    mongo_get(id);
}

//Find
function mongo_get(id){

    var model = db.model(id, getSchema(id));
    model.find(function(err, mice){
        if(err) console.log(err);
        console.log(mice);
    });
}

//Schema
function getSchema(id){

    return schema1;
}