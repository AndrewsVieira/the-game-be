const connParams = require('../infra/connect');
const Sequelize = require('sequelize');
const User = require('./user');

const Ranking = connParams.define('ranking', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    points: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false
})

Ranking.belongsTo(User, {
    foreignKey: 'id_user'
});

module.exports = Ranking;