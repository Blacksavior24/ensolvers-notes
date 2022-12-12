const boom = require('@hapi/boom');

const { models }= require('./../libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async addTask(data){
    const newTask = await models.TaskCategory.create(data);
    return newTask
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {include:[
        'items'
    ]});
    if (!category) {
        throw boom.notFound('category not found')
    }

    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta
  }

  async delete(id) {
    const category = await models.Category.findByPk(id);
    await category.destroy()
    return { id };
  }

}

module.exports = CategoryService;