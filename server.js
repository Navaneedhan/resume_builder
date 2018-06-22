// Including Express
const express = require('express');
const app = express();

// Connecting with the port
app.listen(3001, function() {
	console.log('listening to the port 3001');
});

app.get('/', function(req, res) {
	res.send('Hello space');
});

app.get('/about_us', function(req, res) {
	res.sendFile(__dirname + '/about_us.html');
});
