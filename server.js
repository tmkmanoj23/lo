
var express = require('express')
var app = express()
app.listen(3000,function(err){
if(err){
console.log(err)}
else {
console.log('server running at port 3000')
}})
