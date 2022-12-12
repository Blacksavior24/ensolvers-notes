const express = require('express');

const taskRouter = require('./tasks.routes')
const categoryRouter = require('./categories.routes')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/task', taskRouter);
  router.use('/category', categoryRouter)
}

module.exports = routerApi;
