const Ranking = require("../models/ranking");
const User = require("../models/user");
const Message = require("../utils/message");

exports.getAllRankings = (req, res) => {
    Ranking.findAll({
        include : User
    }).then(ranking => {
        return res.json(ranking);
    }).catch(err => {
        console.log(err)
    })
}

exports.getRankingById = (req, res) => {
    Ranking.findOne({
        where: {
            id: req.params.id
        }
    }).then(ranking => {
        return res.json(ranking);
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteRankingById = (req, res) => {
    Ranking.destroy({
        where: {
            id: req.params.id
        }
    }).then(ranking => {
        return res.json(ranking);
    }).catch(err => {
        console.log(err)
    })
}