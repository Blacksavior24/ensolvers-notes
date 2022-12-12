const { Task, TaskSchema } = require('./task.model');
const {Category, CategorySchema} = require('./category.models')
const {TaskCategory, TaskCategorySchema} = require('./task-category.model')

function setupModels(sequelize) {
  Task.init(TaskSchema, Task.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  TaskCategory.init(TaskCategorySchema, TaskCategory.config(sequelize));

  Category.associate(sequelize.models)
}

module.exports = setupModels;