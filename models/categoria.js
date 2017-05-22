const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Filmes Schema
const CategoriaSchema = mongoose.Schema({
	paginaInicial: {
		type: Boolean
	},
	categoria: {
		type: String
	}
});

const Categoria = module.exports = mongoose.model('Categoria', CategoriaSchema);

module.exports.getCategoriaById = function(id, callback){
	Categoria.findById(id, callback);
}

module.exports.getCategoriaByCategoria = function(categoria, callback){
	const query3 = {categoria: categoria}
	Categoria.findOne(query3, callback);
}

module.exports.addCategoria = function(categoria, callback){
			categoria.save(callback);
}