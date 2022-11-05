var http = require('http')
var fs = require('fs');
const { URLSearchParams } = require('url');

const server = http.createServer(function(req,res){
    if(req.url ==='/'){
    res.writeHead(200,{'content-Type':'text/html'})
    fs.createReadStream('Welcome.html').pipe(res);
    }
    else if(req.url === '/register' && req.method === 'POST'){
        var recData = '';
        req.on('data',function(value){
            recData+= value;
        })
        req.on('end',function(){
            var inputdata = new URLSearchParams(recData);
            res.writeHead(200,{'content-Type':'text/html'})
            res.write("Name: " + inputdata.get('username') + "<br><br>")
            res.write("Password: " + inputdata.get('password') + "<br><br>")
            res.write("Age: " + inputdata.get('age') + "<br><br>")
            res.write("Mobile Number: " + inputdata.get('number') + "<br><br>")
            res.write("Email: " + inputdata.get('email') + "<br><br>")
            res.write("Gender: " + inputdata.get('gender') + "<br><br>")
            res.write("State: " + inputdata.get('state') + "<br><br>")
            res.write("Skills: " + inputdata.get('skills') + "<br><br>")
            res.write("<table border = 1 cellspacing = 0><tr><th>Field Name</th><th>Values</th></tr><tr><td>Name</td><td>username==value</td>")
            res.end();
        })
    }
})
server.listen(5002,function(){
    console.log('server 5002 la start aayiruchu');
})