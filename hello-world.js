// First task (print Hello world)
console.log(`HELLO WORLD`)

//Second task (create a server)
const http = require("http")
const port = 3000


// http.createServer((request, response) => {

//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.end('<h1>Hello Node!!!!</h1>\n');

// }).listen(port);

// console.log(`Server is running on port ${port} ....`)


//Third task (create a program that reads and console.log data from .text file)
const fs = require (`fs`)

http.createServer((request, response) => {

    fs.readFile('welcome.txt', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
      });

}).listen(port);

