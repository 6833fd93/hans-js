/*

	HANS-JS

	Your personal AI framework

	LNSY

*/

const express = require('express');
const app = express();
const pem = require('https-pem');
const spawn = require('child_process').spawn;
require('dotenv').config();

const port = process.env.PORT || 3000;

const server = require('https').createServer(pem, app);

app.use(express.json());
app.use('/components', express.static('./components'));
app.use('/notebooks',  express.static('./notebooks'));
app.get('/', function(req,res) {
  res.sendFile(__dirname + '/components/index.html');
});

const routes = require('./components/routes.js')(app);

server.listen(port, () => {
	console.log(`hans-js booted on port ${port}`);
	spawn('open', [`https://localhost:${port}`]);
});

