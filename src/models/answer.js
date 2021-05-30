const connParams = require('../infra/connect');
const Sequelize = require('sequelize');
const Alternative = require('./alternative');
const User = require('./user');

const Answer = connParams.define('answer', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_alternative: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false
})

Answer.hasMany(Alternative, {
    foreignKey: 'id'
});

Answer.hasOne(User, {
    foreignKey: 'id'
});

module.exports = Answer;