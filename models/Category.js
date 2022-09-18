const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
{
  // defining columns
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  category_name:{
    type: DataTypes.STRING,
    allowNull: true,
  },
},
{
  // links to database connection
  sequelize,

  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category',
},
);

module.exports = Category;
