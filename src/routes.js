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
const TipoController = require('./controllers/tipo_usuarioController');


// User Routes
routes.post('/user', UserController.create);
routes.get('/user', UserController.index);
routes.put('/user', UserController.update);
routes.delete('/user/:id_user', UserController.delete);

//login
routes.post('/login', SessionController.create);

//tipo
routes.post('/tipo_usuario', TipoController.create);
routes.put('/tipo_usuario', TipoController.update);
routes.get('/tipo_usuario', TipoController.index);
routes.delete('/tipo_usuario/:id_tipo_user', TipoController.delete);


//classe Routes
routes.post('/classe', ClasseController.create);
routes.get('/classe', ClasseController.index);
routes.put('/classe', ClasseController.update);
routes.delete('/classe/:id_classe', ClasseController.delete);

//especie Routes
routes.post('/especie', EspecieController.create);
routes.get('/especie', EspecieController.index);
routes.put('/especie', EspecieController.update);
routes.delete('/especie/:id_especie', EspecieController.delete)

//foto Routes
routes.post('/foto', FotoController.create);
routes.get('/foto', FotoController.index);
routes.put('/foto', FotoController.update);
routes.delete('/foto/:id_foto', FotoController.delete);

//estado Routes
routes.post('/estado', EstadoController.create);
routes.get('/estado', EstadoController.index);
routes.put('/estado', EstadoController.update);
routes.delete('/estado/:id_estado', EstadoController.delete);

//cidade Routes
routes.post('/cidade', CidadeController.create);
routes.get('/cidade', CidadeController.index);
routes.put('/cidade', CidadeController.update);
routes.delete('/cidade/:id_cidade', CidadeController.delete);

//bairro Routes
routes.post('/bairro', BairroController.create);
routes.get('/bairro', BairroController.index);
routes.put('/bairro', BairroController.update);
routes.delete('/bairro/:id_bairro', BairroController.delete);

//localizacao Routes
routes.post('/localizacao', LocalizacaoController.create);
routes.get('/localizacao', LocalizacaoController.index);
routes.put('/localizacao', LocalizacaoController.update);
routes.delete('/localizacao/:id_localizacao', LocalizacaoController.delete);
routes.get('/local', LocalizacaoController.index_completo);


//animal Routes
routes.post('/animal', AnimalSilvestre.create);
routes.get('/animal', AnimalSilvestre.index);
routes.put('/animal', AnimalSilvestre.update);
routes.delete('/animal/:id_animal', AnimalSilvestre.delete);

//Consultas especiais
routes.get('/animalCompleto/:id_animal', AnimalSilvestre.index_completo);
routes.get('/animalLoc', AnimalSilvestre.animal_estado);
routes.get('/animalUser', AnimalSilvestre.animal_user);

module.exports = routes;