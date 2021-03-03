const http = require('http'); // importing http package

// func to create server
const server = http.createServer((req, res) =>{

    res.end('This is my server response');

});

// set the server to listen on port 3000 for dev
server.listen(process.env.port || 3000);
