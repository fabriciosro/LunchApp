const express = require('express');

const UserController = require('./controllers/UserController');
const RestaurantController = require('./controllers/RestaurantController');
const PollController = require('./controllers/PollController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/restaurants', RestaurantController.store);

routes.post('/restaurants/:userId/polls', PollController.store);

module.exports = routes;