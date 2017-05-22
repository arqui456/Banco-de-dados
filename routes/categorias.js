const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Categoria = require('../models/categoria');

// Registro Categoria
router.post('/add-categoria', (req , res, next) => {
	let newCategoria = new Categoria({
		paginaInicial: req.body.paginaInicial,
		categoria: req.body.categoria
	});

	Categoria.addCategoria(newCategoria, (err, categoria) => {
		if(err){
			res.json({success: false, msg:'Failed to register categoria '});
		} else {
			res.json({success: true, msg: 'Categoria registered'});
		}
	})
});

// Autenticador
router.post('/authenticate', (req , res, next) => {
	const categoriaNew = req.body.categoriaNew;

	Categoria.getCategoriaByCategoria(categoriaNew, (err, categoria) => {
		if(err) throw err;
		if(!categoria){
			return res.json({success: false, msg: 'Categoria não encontrada'});
		}
	});
});

module.exports = router;