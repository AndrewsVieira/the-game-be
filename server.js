const express = require('express');
const cors = require('cors');
const app = express();
const port = 8060;
const hostname = "0.0.0.0";

const { login, logout } = require('./src/controllers/loginController.js');
const auth = require('./src/infra/auth.js');
const { create, getAll, getById, update, deleteById } = require('./src/controllers/userController')

app.use(cors());
app.use(express.json());

// Login e Logout
app.post('/v1/login', login);
app.delete("/v1/logout", logout);

// Crud usuario
app.post('/v1/users', create);
app.get('/v1/users', getAll);
app.get('/v1/users/:id', getById);
app.put('/v1/users/:id', update);
app.delete('/v1/users/:id', deleteById);

app.listen(port, hostname, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});