const connParams = require('../infra/connect');
const Sequelize = require('sequelize')

const Ranking = connParams.define('ranking', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    points: {
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

module.exports = Ranking;