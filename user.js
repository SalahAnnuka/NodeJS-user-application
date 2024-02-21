var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("Server Start");
});

app.get('/list-users',function(req,res){
    res.send("List Start");
});

app.get('/user/:id',function(req,res){
    res.send("Select User");
});

app.delete('/delete-user',function(req,res){
    res.send("User Deleted");
});

app.post('/add-user',function(req,res){
    res.send("User Added");
});

var server = app.listen(3355,function(){
    var host = server.address().address;
    var port = server.address().port;
});



