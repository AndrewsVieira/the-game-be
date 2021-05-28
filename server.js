const express = require('express');
const cors = require('cors');

const app = express();
const port = 8060;
const hostname = "0.0.0.0";
const login = require('./src/controllers/login.js');
const auth = require('./src/infra/auth.js');
const logout = require('./src/controllers/logout')

app.use(cors());
app.use(express.json());

app.use('/v1/login', login);
app.use("/v1/logout", auth, logout);

app.listen(port, hostname, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});