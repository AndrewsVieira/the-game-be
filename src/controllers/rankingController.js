const Ranking = require("../models/ranking");
const User = require("../models/user");
const Message = require("../utils/message");

exports.createRanking = (req, res) => {
    let body = req.body;
    
    console.log(body);

    if (body.points == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    Ranking.create({
        points: body.points,
        id_user: body.id_user
    }).then(ranking => {
        return res.json(ranking);
    }).catch(err => {
        console.log(err);
    })

}

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

exports.updateRanking = (req, res) => {

    let body = req.body;

    if (body.points == null || body.id_user == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    Ranking.update({
        ranking: body.ranking
    }, {
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