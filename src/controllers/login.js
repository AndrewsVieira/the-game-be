const login = (req, res) => {
    console.log("JAIR TENTANDO CHAMAR O LOGIN")

    return res.json(req.body);
}

module.exports = login;