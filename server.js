var express = require('express');


var app = express();
app.enable("trust proxy");
app.get('/', (req, res)=>{

 console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress ||
        req.socket.remoteAddress || req.ip);
 console.log(req.headers["accept-language"].split(',')[0]);
 console.log(req.headers["user-agent"].match(/\((.*?)\)/)[1]);

 var result = {
   ipaddress : req.headers['x-forwarded-for'] || req.connection.remoteAddress ||
          req.socket.remoteAddress || req.ip,
   language : req.headers["accept-language"].split(',')[0],
   os : req.headers["user-agent"].match(/\((.*?)\)/)[1]
 }
 res.json(result);
});

app.listen(3000);
