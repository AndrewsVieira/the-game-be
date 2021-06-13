const Ranking = require("../models/ranking");
const User = require("../models/user");
const Message = require("../utils/message");

exports.getAllRankings = (req, res) => {
    Ranking.findAll({
        include: [
            {
              model: User,
              attributes: ['name', 'user']
            }
          ]        
    }).then(ranking => {
        return res.json(ranking);
    }).catch(err => {
        console.log(err)
    })
}


