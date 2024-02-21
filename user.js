let express = require('express');
let app = express();
let fs = require('fs');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended:false});


var data = JSON.parse(fs.readFileSync(__dirname+'/users.json'));

app.get('/form/',function(req,res){
    res.sendFile(__dirname+'/form.html');
});

app.get('/',function(req,res){
    res.send("Server Start");
});

app.get('/list-users',function(req,res){
    res.json(data);
});

app.get('/user/:id',function(req,res){
    var id = req.params.id;
    var user = data[id];
    console.log(user);
    res.json(user);
});

app.get('/delete-user/:id',function(req,res){
    var id = req.params.id;
    res.send("User Deleted");
});

app.post('/add-user',function(req,res){
    res.send("User Added");
});

app.post('/submitform/',urlEncoded,function(req,res){
    res.send("Data submitted: "+req.body.email+" , "+req.body.password);
});

var server = app.listen(3355,function(){
    var host = server.address().address;
    var port = server.address().port;
});



