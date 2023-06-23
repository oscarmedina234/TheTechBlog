const {sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('./config/connection');

class Post extends Model {}


Post.init(
    {
        title: DataTypes.STRING,
        content: DataTypes.STRING
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post'
    }
    );

    module.exports = Post;
