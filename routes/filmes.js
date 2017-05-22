const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Filme = require('../models/filme');

// Registro Filme
router.post('/gerenciador', (req , res, next) => {
	let newFilme = new Filme({
		title: req.body.title,
		categoria: req.body.categoria,
		avaliacao: req.body.avaliacao,
		cena1: req.body.cena1,
		cena2: req.body.cena2,
		cena3: req.body.cena3,
		descricao: req.body.descricao,
		trailer: req.body.trailer
	});

	Filme.addFilme(newFilme, (err, filme) => {
		if(err){
			res.json({success: false, msg:'Failed to register filme '});
		} else {
			res.json({success: true, msg: 'Filme registered'});
		}
	})
});

// Autenticador
router.post('/authenticate', (req , res, next) => {
	const title = req.body.title;

	Filme.getFilmeByTitle(title, (err, title) => {
		if(err) throw err;
		if(!title){
			return res.json({success: false, msg: 'Filme não encontrado'});
		}
	});
});

module.exports = router;