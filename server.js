const express = require('express');
const cors = require('cors');
const app = express();
const port = 8060;
const hostname = "0.0.0.0";

const { login, logout } = require('./src/controllers/loginController.js');
const auth = require('./src/infra/auth.js');
const { create, getAll, getById, update, deleteById } = require('./src/controllers/userController');
const { createAlternative, getAllAlternatives, getAlternativeById, updateAlternative, deleteAlternativeById } = require('./src/controllers/alternativeController')
const { createQuestion, getAllQuestions, getQuestionById, updateQuestion, deleteQuestionById } = require('./src/controllers/questionController')
const { createAnswer, getAllAnswers, getAnswerById, updateAnswer, deleteAnswerById } = require('./src/controllers/answerController')
const { getAllRankings } = require('./src/controllers/rankingController')

app.use(cors());
app.use(express.json());

// Login e Logout
app.post('/v1/login', login);
app.delete("/v1/logout", auth, logout);

// Crud usuario
app.post('/v1/users', create);
app.get('/v1/users', auth, getAll);
app.get('/v1/users/:id',  auth, getById);
app.put('/v1/users/:id', auth, update);
app.delete('/v1/users/:id', auth, deleteById);

// Crud Alternativas
app.post('/v1/alternatives', auth, createAlternative);
app.get('/v1/alternatives', auth, getAllAlternatives);
app.get('/v1/alternatives/:id', auth, getAlternativeById);
app.put('/v1/alternatives/:id', auth, updateAlternative);
app.delete('/v1/alternatives/:id', auth, deleteAlternativeById);

// CRUD question
app.post('/v1/questions', auth, createQuestion);
app.get('/v1/questions/', auth, getAllQuestions);
app.get('/v1/questions/:id', auth, getQuestionById);
app.put('/v1/questions/:id', auth, updateQuestion);
app.delete('/v1/questions/:id', auth, deleteQuestionById);

// Crud Respostas
app.post('/v1/answers', auth, createAnswer);
app.get('/v1/answers', auth, getAllAnswers);
app.get('/v1/answers/:id', auth, getAnswerById);
app.put('/v1/answers/:id', auth, updateAnswer);
app.delete('/v1/answers/:id', auth, deleteAnswerById);

// Crud Ranking
app.get('/v1/rankings/:option', auth, getAllRankings);

app.listen(port, hostname, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});