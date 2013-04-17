/**
 * Created with JetBrains WebStorm.
 * User: okazawa
 * Date: 2013/04/17
 * Time: 14:01
 * To change this template use File | Settings | File Templates.
 */

var fs = require('fs');

fs.readFile('./test.txt', 'utf-8', function(err,data){
    if(err){
        return console.log(err);
    }else{
        console.log(data);
    }
})