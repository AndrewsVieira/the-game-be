const connParams = require('../infra/connect');
const Sequelize = require('sequelize');
const Answer = require('./answer');

const Alternative = connParams.define('alternative', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    alternative: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_answer: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    isRight: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false
})

Alternative.hasOne(Answer, {
    foreignKey: 'id_answer'
});

module.exports = Alternative;