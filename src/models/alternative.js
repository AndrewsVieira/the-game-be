const connParams = require('../infra/connect');
const Sequelize = require('sequelize');

const Alternative = connParams.define('alternative', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    alternative: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_question: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    is_right: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Alternative;