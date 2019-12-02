const express = require('express');
const helemt = require('helmet');

const RecipeRouter = require('./recipies/recipe-router');

const server = express();
server.use(helemt());
server.use(express.json());

server.use('/api/recipes', RecipeRouter);

module.exports = server;