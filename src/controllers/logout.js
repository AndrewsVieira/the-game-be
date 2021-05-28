const logout = (req, res) => {
    console.log("JAIR TENTANDO DESLOGAR")

    return res.json(req.body);
}

module.exports = logout;