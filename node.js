const http=require('http');
const fs=require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public','index.html'),(err,content) => {
            console.log(path.join(__dirname, 'public','index.html'));
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    }
    // } else if(req.url === '/style.css'){
    //          fs.readFile(path.join(__dirname, 'public','style.css'),(err,content) => {
    //              if(err) throw err;
    //              res.writeHead(200,{'content-type': 'text/css'});
    //              res.end(content);
    
             
    //         });
    //     }
    
             
    
    else if(req.url === '/Gallery'){
        fs.readFile(path.join(__dirname, 'public','Gallery.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        });
    
    }else if(req.url === '/Contact'){
        fs.readFile(path.join(__dirname, 'public','contact.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(content);
        
        });
    }else if(req.url === '/main.js'){
        fs.readFile(path.join(__dirname, 'public','main.js'),(err,content) => {
            if(err) throw err;
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(content);
        
        });
    }
});



const PORT = process.env.PORT || 7777;
server.listen(PORT ,() => {
    console.log('Server is running on port: '+PORT);
});