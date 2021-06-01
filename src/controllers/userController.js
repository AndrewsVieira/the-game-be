const User = require("../models/user");
const Message = require("../utils/message");



exports.create = (req, res) => {
    let body = req.body;

    if (body.name == null || body.user == null || body.password == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    User.create({
        name: body.name,
        user: body.user,
        password: body.password
    }).then(user => {
        return res.json(user);
    }).catch(err => {
        console.log(err);
    })

}

exports.getAll = (req, res) => {
    User.findAll().then(user => {
        return res.json(user);
    }).catch(err => {
        console.log(err)
    })

}

exports.getById = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        return res.json(user);
    }).catch(err => {
        console.log(err)
    })
}

exports.update = (req, res) => {

    let body = req.body;

    if (body.name == null || body.user == null || body.password == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    User.update({
        name: body.name,
        user: body.user,
        password: body.password
    }, {
        where: {
            id: req.params.id
        }
    }).then(user => {
        return res.json(user);
    }).catch(err => {
        console.log(err)
    })
}

exports.deleteById = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(user => {
        return res.json(user);
    }).catch(err => {
        console.log(err)
    })

}