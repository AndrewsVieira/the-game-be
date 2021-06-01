const User = require("../models/user");
const bcrypt = require('bcrypt')
const Message = require("../utils/message");

function hashPassword(password) {
    console.log('senha:', password);
    bcrypt.genSalt(password, function(err, salt) {
        console.log('Erro antes do hash\n', err)
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                console.log('Erro ao fazer o hash do password.\n', err);
            } else {
                return hash
            }
        });
    });
}

exports.create = (req, res) => {
    let body = req.body;

    if (body.name == null || body.user == null || body.password == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    User.create({
        name: body.name,
        user: body.user,
        password: hashPassword(body.password)
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
        password: hashPassword(body.password)
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