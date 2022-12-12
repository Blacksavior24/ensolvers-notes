const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const categoryId = Joi.number().integer();
const taskId = Joi.number().integer();

const createCategorySchema = Joi.object({
  name: name.required(),
});

const updateCategorySchema = Joi.object({
  name: name,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

const addTaskSchema = Joi.object({
  categoryId: categoryId.required(),
  taskId: taskId.required(),
});


module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema, addTaskSchema }