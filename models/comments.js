const {sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    body:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comments'
  }
  );

  module.exports = Comments;