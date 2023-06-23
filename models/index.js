const User = require('./user');
const Post = require('./post');
const Comments = require('./comments');

Comments.belongsTo(User, {
    foreignKey: 'userId'
});

Psot.belongsTo(User, {
    foreignKey: 'userId'
});

Post.hasMany(Comments, {
    foreignKey: 'postId'
});

module.exports = {
    User,
    Post,
    Comments
};