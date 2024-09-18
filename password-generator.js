// Fourth task (Password generator)
const http = require("http")
const port = 3000

http.createServer((request, response) => {

var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);

}).listen(port);