const Question = require("../models/question");
const Message = require("../utils/message");
const Alternative = require("../models/alternative")

exports.createQuestion = (req, res) => {
    let body = req.body;
    
    console.log(body);

    if (body.question == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    Question.create({
        question: body.question,
    }).then(question => {
        return res.json(question);
    }).catch(err => {
        console.log(err);
    })

}

exports.getAllQuestions = (req, res) => {
    Question.findAll({
        limit: 10,
        include: [
            {
                model: Alternative,
                attributes: ['id', 'alternative']
            }
        ] 
    }).then(question => {
        return res.json(question);
    }).catch(err => {
        console.log(err)
    })
}

exports.getQuestionById = (req, res) => {
    Question.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Alternative,
                attributes: ['id', 'alternative']
            }
        ]    
    }).then(question => {
        return res.json(question);
    }).catch(err => {
        console.log(err)
    })
}

exports.updateQuestion = (req, res) => {

    let body = req.body;

    if (body.alternative == null || body.isRight == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    Question.update({
        question: body.question
    }, {
        where: {
            id: req.params.id
        }
    }).then(question => {
        return res.json(question);
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteQuestionById = (req, res) => {
    Question.destroy({
        where: {
            id: req.params.id
        }
    }).then(question => {
        return res.json(question);
    }).catch(err => {
        console.log(err)
    })
}