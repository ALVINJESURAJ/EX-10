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
            var skills =" ";
            var Name=inputdata.get('username') 
            var Pass = inputdata.get('password')
            var age = inputdata.get('age')
            var Mobile =inputdata.get('number')
            var email = inputdata.get('email')
            var gender =inputdata.get('gender')
            var state = inputdata.get('state')
            if(inputdata.get('skills1'))
            {
                skills+=" "+inputdata.get('skills1')
            }
            if(inputdata.get('skills2'))
            {
                skills+=" "+ inputdata.get('skills2')
            }
            if(inputdata.get('skills3'))
            {
                skills+=" "+ inputdata.get('skills3')
            }
            if(inputdata.get('skills4'))
            {
                skills+=" "+ inputdata.get('skills4')
            }
            res.write("Name: " + Name+ "<br><br>")
            res.write("Password: " + Pass + "<br><br>")
            res.write("Age: " + age + "<br><br>")
            res.write("Mobile Number: " + Mobile + "<br><br>")
            res.write("Email: " + email + "<br><br>")
            res.write("Gender: " + gender + "<br><br>")
            res.write("State: " + state + "<br><br>")
            res.write("Skills: " + skills + "<br><br>")
            res.write("<table border = 1 cellspacing = 0>"+"<tr><td> Name </td>"+"<td>"+Name+"</td></tr>")
            res.write("<tr><td> Password </td>"+"<td>"+Pass+"</td></tr>")
            res.write("<tr><td> Age </td>"+"<td>"+age+"</td></tr>")
            res.write("<tr><td> Mobile </td>"+"<td>"+Mobile+"</td></tr>")  
            res.write("<tr><td> Email </td>"+"<td>"+email+"</td></tr>")  
            res.write("<tr><td> Gender </td>"+"<td>"+gender+"</td></tr>")  
            res.write("<tr><td> State </td>"+"<td>"+state+"</td></tr>")   
            res.write("<tr><td> Skills </td>"+"<td>"+skills+"</td></tr>")         
            res.end();
        })
    }
})
server.listen(5003,function(){
    console.log('Server started at 5003');
})
