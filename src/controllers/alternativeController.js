const Alternative = require("../models/alternative");
const Message = require("../utils/message");

exports.createAlternative = (req, res) => {
    let body = req.body;

    console.log(body);

    if (body.alternative == null || body.id_question == null || body.is_right == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    Alternative.create({
        alternative: body.alternative,
        id_question: body.id_question,
        is_right : body.is_right
    }).then(alternative => {
        return res.json(alternative);
    }).catch(err => {
        console.log(err);
    })

}

exports.getAllAlternatives = (req, res) => {
    Alternative.findAll().then(alternative => {
        return res.json(alternative);
    }).catch(err => {
        console.log(err)
    })
}

exports.getAlternativeById = (req, res) => {
    Alternative.findOne({
        where: {
            id: req.params.id
        }
    }).then(alternative => {
        return res.json(alternative);
    }).catch(err => {
        console.log(err)
    })
}

exports.updateAlternative = (req, res) => {

    let body = req.body;

    if (body.alternative == null || body.isRight == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    Alternative.update({
        alternative: body.alternative,
        isRight: body.isRight
    }, {
        where: {
            id: req.params.id
        }
    }).then(alternative => {
        return res.json(alternative);
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteAlternativeById = (req, res) => {
    Alternative.destroy({
        where: {
            id: req.params.id
        }
    }).then(alternative => {
        return res.json(alternative);
    }).catch(err => {
        console.log(err)
    })
}