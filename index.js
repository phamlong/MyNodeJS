
const app = require('express')();

app.get('/', function(req, res) {
	res.send('Hello from vietxa');
});

app.listen(3000);