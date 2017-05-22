const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
var db;

// Connect to Database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
	console.log('Connectado ao banco de dados: '+config.database); 
});

// On error
mongoose.connection.on('error', (err) => {
	console.log('Erro no Banco de dados:' +err);
});

const app = express();

const port = process.env.PORT || 8080;

const users = require('./routes/users');
const filmes = require('./routes/filmes');
const categorias = require('./routes/categorias');

// cors middleware
app.use(cors());

// set static Folder
app.use(express.static(path.join(__dirname, 'public')));


//body parser middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);
app.use('/filmes', filmes);
app.use('/categorias', categorias);


//Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint')
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res) => {
	var cursor = db.collection('filmes').find()
});

app.post('/filmes', (req, res) => {
  console.log(req.body)
});

db.collection('filmes').find().toArray(function(err, results) {
	console.log(results)
});	


app.listen(port, () =>{
	console.log('Servidor iniciado no port ' +port);
});

//http://localhost:3000

