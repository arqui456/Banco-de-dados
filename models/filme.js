const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Filmes Schema
const FilmeSchema = mongoose.Schema({
	title: {
		type: String
	},
	categoria: {
		type: String
	},
	avaliacao: {
		type: String
	},
	cena1: {
		type: String
	},
	cena2: {
		type: String
	},
	cena3: {
		type: String
	},
	descricao: {
		type: String	
	},
	trailer: {
		type: String
	}
});

const Filme = module.exports = mongoose.model('Filme', FilmeSchema);

module.exports.getFilmeById = function(id, callback){
	Filme.findById(id, callback);
}

module.exports.getFilmeByTitle = function(title, callback){
	const query2 = {title: title}
	Filme.findOne(query2, callback);
}

module.exports.getFilmeByCategoria = function(categoria, callback){
	const query3 = {categoria: categoria}
	Filme.findOne(query3, callback);
}

module.exports.addFilme = function(newUser, callback){
			newUser.save(callback);
}