const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose
	.connect(
		'mongodb+srv://greskelll:Salopart2@cluster1.zgyfd1f.mongodb.net/?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = app;
