const express = require('express');
const routes = express.Router();
const controller = require('../controller/authController');

routes.post('/login', controller.getUser);

routes.post('/register', controller.addUser);

routes.get('/test', (req, res) => {
  res.send('auth routes working');
});
module.exports = routes;
