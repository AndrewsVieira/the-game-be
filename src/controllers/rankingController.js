const Ranking = require("../models/ranking");
const User = require("../models/user");
const List = require("../utils/list");
const message = require("../utils/message");

exports.getAllRankings = (req, res) => {  
    Ranking.findAll({
        include: [
            {
                model: User,
                attributes: ['name']
            }
        ]        
    }).then(ranking => {
        let list = new List();

        ranking.forEach(element => {
            list.inserting(element);
        });
        
        let option = parseInt(req.params.option)

        if (option === 1 || option === 2) {
            list.sort(option);
        } else {
            return res.json(message("Opção inválida"));
        }

        return res.json(list);
    }).catch(err => {
        console.log(err)
    });
}


