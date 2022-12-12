const { Model, DataTypes, Sequelize } = require('sequelize');

const {CATEGORY_TABLE} = require('./category.models');
const { TASK_TABLE} = require('./task.model');

const TASK_CATEGORY_TABLE = 'tasks_categories';

const TaskCategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  taskId: {
    field: 'task_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TASK_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class TaskCategory extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TASK_CATEGORY_TABLE,
      modelName: 'TaskCategory',
      timestamps: false
    }
  }
}


module.exports = { TASK_CATEGORY_TABLE, TaskCategorySchema, TaskCategory}