const express = require('express');
const routes = express.Router();
const AnimalSilvestre = require('./controllers/animal_controller');
const UserController = require('./controllers/user_controller');
const SessionController = require('./controllers/session_controller');
const ClasseController = require('./controllers/classe_controller');
const EspecieController = require('./controllers/especie_controller');
const FotoController = require('./controllers/foto_controller');
const EstadoController = require('./controllers/estado_controller');
const CidadeController = require('./controllers/cidade_controller');
const BairroController = require('./controllers/bairro_controller');
const LocalizacaoController = require('./controllers/localizacao_controller');
routes.get('/', AnimalSilvestre.index);

// User Routes
routes.post('/user', UserController.create);
routes.get('/user', UserController.index);
routes.post('/login', SessionController.create);


//classe Routes
routes.post('/classe', ClasseController.create);
routes.get('/classe', ClasseController.index);

//especie Routes
routes.post('/especie', EspecieController.create);
routes.get('/especie', EspecieController.index);

//foto Routes
routes.post('/foto', FotoController.create);
routes.get('/foto', FotoController.index);

//estado Routes
routes.post('/estado', EstadoController.create);
routes.get('/estado', EstadoController.index);

//cidade Routes
routes.post('/cidade', CidadeController.create);
routes.get('/cidade', CidadeController.index);

//bairro Bairro
routes.post('/bairro', BairroController.create);
routes.get('/bairro', BairroController.index);

//localizacao Bairro
routes.post('/localizacao', LocalizacaoController.create);
routes.get('/localizacao', LocalizacaoController.index);

module.exports = routes;