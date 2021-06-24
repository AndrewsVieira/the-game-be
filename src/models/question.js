const connParams = require('../infra/connect');
const Sequelize = require('sequelize');
const Alternative = require('./alternative');

const Question = connParams.define('question', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false
    },
},{
    freezeTableName: true,
    timestamps: false
})

Question.hasMany(Alternative, {
    foreignKey: 'id_question'
});

module.exports = Question;