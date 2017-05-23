const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const MongoClient = require('mongodb').MongoClient
var db;









const app = express();



//app.set('view engine', 'ejs');

const users = require('./routes/users');
const filmes = require('./routes/filmes');
const categorias = require('./routes/categorias');

// cors middleware
app.use(cors());

// set static Folder
app.use(express.static(path.join(__dirname, 'public')));


//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({extended: true}))


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);
app.use('/filmes', filmes);
app.use('/categorias', categorias);


//MongoClient.connect('mongodb://arqui_base:aquinaoentra000@ds147711.mlab.com:47711/icflix', (err, database) => {
 // if (err) return console.log(err)
 // db = database
 // app.listen(3000, () => {
 //   console.log('listening on 3000')
//  })
//})

//app.get('/', (req, res) => {
//	var cursor = db.collection('users').find()
//});

//app.get('/', (req, res) => {
 // db.collection('users').find().toArray((err, result) => {
 //   if (err) return console.log(err)
    // renders index.ejs
 //   res.render('index.ejs', {users: result})
 // })
//})



//Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint')
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});


const port = process.env.PORT || 8080;

// Connect to Database
mongoose.connect(config.database,(err, database) => {
	if(err) return console.log(err)
	db = database
});

// On connection
mongoose.connection.on('connected', () => {
	console.log('Connectado ao banco de dados: '+config.database); 
});

// On error
mongoose.connection.on('error', (err) => {
	console.log('Erro no Banco de dados:' +err);
});

function find (collec, query, callback) {
    mongoose.connection.db.collection(collec, function (err, collection) {
    collection.find(query).toArray(callback);
    });
}


find('users', {name: 'Arquimedes' }, (err, docs) => {
		console.dir(docs);
});





app.listen(port, () =>{
	console.log('Servidor iniciado no port ' +port);
});




//http://localhost:3000

