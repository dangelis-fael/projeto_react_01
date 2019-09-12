const express = require ('express');
const DevController = require('./controllers/DevController');
const LikeController = require ('/controllers/LikeController');
//const server = express();
const routes = express.Router();

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
module.exports = routes;