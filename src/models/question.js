const connParams = require('../infra/connect');
const Sequelize = require('sequelize')

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

module.exports = Question;