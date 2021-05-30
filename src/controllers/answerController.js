const Answer = require("../models/answer");
const Message = require("../utils/message");

exports.createAnswer = (req, res) => {
    let body = req.body;

    console.log(body);

    if (body.id_user == null || body.id_alternative == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    Answer.create({
        id_alternative: body.id_alternative,
        id_user: body.id_user,
    }).then(answer => {
        return res.json(answer);
    }).catch(err => {
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