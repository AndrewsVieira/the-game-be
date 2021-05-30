const connParams = require('../infra/connect');
const Sequelize = require('sequelize')

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
},{
    freezeTableName: true,
    timestamps: false
})

module.exports = Answer;