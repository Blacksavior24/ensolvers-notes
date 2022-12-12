const express = require('express');

const taskRouter = require('./tasks.routes')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/task', taskRouter);
}

module.exports = routerApi;
