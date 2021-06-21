const Ranking = require("../models/ranking");
const User = require("../models/user");
const Message = require("../utils/message");
const List = require("../utils/nodeList");

exports.getAllRankings = (req, res) => {
    const ORDER_BY_POINTS = 1;

    Ranking.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]        
    }).then(ranking => {
        let list = new List(ranking);
        
        list.sort(ORDER_BY_POINTS);

        return res.json(list);
    }).catch(err => {
        console.log(err)
    });
}


