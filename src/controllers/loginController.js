const User = require("../models/user");
const Message = require("../utils/message");

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
            return res.status(400).json(Message("Usuario não encontrado"));
        }
        return res.json(user);
    }).catch(err => {
        console.log('Error ao logar', err)
    });
}

exports.logout = (req, res) => {
    return res.json(Message("Usuário disconected"));
}