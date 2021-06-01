const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Message = require("../utils/message");

require ('dotenv').config();

exports.login = (req, res) => {
    let body = req.body;

    if (body.login == null || body.password == null) {
        return res.status(400).json(Message("Os Dados não podem ser nulos!"));
    }

    User.findOne({
        where: {
            user: body.login,
            password: body.password
        }
    }).then(user => {
        if (user == null) {
            console.log("Usuário não encontrado.");
            return res.status(400).json(Message("Usuário ou senha incorretos."));
        }

        bcrypt.compare(body.password, user.password).then(result => {
            if (result) {
                const token = jwt.sign({
                    name: user.login
                }, process.env.SECRET);

                User.update({
                    token: token
                }, {
                    where: {
                        id: user.id
                    }
                }).then(() => {
                    console.log('Token alterado na tabela User.');
                }).catch(err => {
                    console.log(err);
                });

                return res.json({
                    token: token
                });              
            }
        })
    }).catch(err => {
        console.log('Error ao logar', err);
    });
}

exports.logout = (req, res) => {
    return res.json(Message("Usuário disconected"));
}