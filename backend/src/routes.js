const express = require('express');

const UserController = require('./controllers/UserController');
const RestaurantController = require('./controllers/RestaurantController');
const PollController = require('./controllers/PollController');
const PrepareController = require('./controllers/PrepareController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/restaurants', RestaurantController.store);
routes.post('/polls', PollController.store);

routes.get('/restaurants', RestaurantController.index);
routes.get('/user', UserController.index);

routes.post('/restaurants/:restaurantId/polls', PollController.store);
routes.post('/restaurants/prepare', PrepareController.store);

module.exports = routes;