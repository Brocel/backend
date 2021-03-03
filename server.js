const http = require('http'); // importing http package
const app = require('./app'); // importing app 


// func to create server
//const server = http.createServer((req, res) =>{
//
//   res.end('This is my server response');
//
//});
app.set('port', process.env.PORT || 3000);
const server = htpp.createServer(app);

// set the server to listen on port 3000 for dev
server.listen(process.env.port || 3000);
