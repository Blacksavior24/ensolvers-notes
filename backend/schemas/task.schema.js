const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const description = Joi.string().min(10);

const createTaskSchema = Joi.object({
  name: name.required(),
  description: description.required(),
});

const updateTaskSchema = Joi.object({
  name: name,
  description: description,
});

const getTaskSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTaskSchema, updateTaskSchema, getTaskSchema }