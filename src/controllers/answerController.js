const Answer = require("../models/answer");
const Message = require("../utils/message");
const Alternative = require("../models/alternative");
const Ranking = require("../models/ranking");

exports.createAnswer = (req, res) => {
    let body = req.body;

    
    if (body.id_user == null || body.id_alternative == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }
    
    Answer.create({
        id_alternative: body.id_alternative,
        id_user: body.id_user,
    }).then(answer => {
        
        Alternative.findOne({
            where : {
                id : answer.dataValues.id_alternative
            }
        }).then(alternative => {
            const response = {
                is_right: alternative.is_right,
                id_alternative: body.id_alternative,
                id_user: body.id_user
            }

            if(alternative == null){
                return res.status(400).json(Message("Alternativa não encontrada!!"));
            }

            if(alternative.is_right){

                console.log(body.id_user)
                
                Ranking.findOne({
                    where: {
                        id_user :  body.id_user
                    }
                }).then(ranking => {
                    console.log(ranking);
                    if(ranking == null){
                        Ranking.create({
                            id_user :  body.id_user,
                            points : 1
                        });
                        return;
                    };
            
                    let point  = ranking.points + 1;
            
                    Ranking.update({
                        points: point,
                        }, {
                        where: {
                            id_user: ranking.id_user
                        }
                    }).then(result => {
                       console.log(result);
                    }).catch(err => {
                        console.log(err)
                    });
            
                }).catch( err => {
                    res.status(500).json(Message("Ocorreu um erro fazer a busca no banco de dados. Tende novamente mais tarde."));
                    console.log(err);
                })
            }
            return res.json(response);
        }).catch(err => {
            res.status(500).json(Message("Ocorreu um erro fazer a busca no banco de dados. Tende novamente mais tarde."));
            console.log(err);
        });

    }).catch(err => {
        res.status(500).json(Message("Ocorreu um erro fazer a busca no banco de dados. Tende novamente mais tarde."));
        console.log(err);
    })

}

exports.getAllAnswers = (req, res) => {
    Answer.findAll().then(answer => {
        return res.json(answer);
    }).catch(err => {
        console.log(err)
    })
}

exports.getAnswerById = (req, res) => {
    Answer.findOne({
        where: {
            id: req.params.id
        }
    }).then(answer => {
        return res.json(answer);
    }).catch(err => {
        console.log(err)
    })
}

exports.updateAnswer = (req, res) => {

    let body = req.body;

    if (body.id_alternative == null || body.id_user == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    Answer.update({
        id_user: body.id_user,
        id_alternative: body.id_alternative
    }, {
        where: {
            id: req.params.id
        }
    }).then(answer => {
        return res.json(answer);
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteAnswerById = (req, res) => {
    Answer.destroy({
        where: {
            id: req.params.id
        }
    }).then(answer => {
        return res.json(answer);
    }).catch(err => {
        console.log(err)
    })
}