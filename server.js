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
const { createRanking, getAllRankings, getRankingById, updateRanking, deleteRankingById } = require('./src/controllers/rankingController')

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

// Crud Alternativas
app.post('/v1/alternatives', createAlternative);
app.get('/v1/alternatives', getAllAlternatives);
app.get('/v1/alternatives/:id', getAlternativeById);
app.put('/v1/alternatives/:id', updateAlternative);
app.delete('/v1/alternatives/:id', deleteAlternativeById);

// CRUD question
app.post('/v1/questions', createQuestion);
app.get('/v1/questions', getAllQuestions);
app.get('/v1/questions/:id', getQuestionById);
app.put('/v1/questions/:id', updateQuestion);
app.delete('/v1/questions/:id', deleteQuestionById);

// Crud Respostas
app.post('/v1/answers', createAnswer);
app.get('/v1/answers', getAllAnswers);
app.get('/v1/answers/:id', getAnswerById);
app.put('/v1/answers/:id', updateAnswer);
app.delete('/v1/answers/:id', deleteAnswerById);

// Crud Ranking
app.get('/v1/rankings', getAllRankings);
app.get('/v1/rankings/:id', getRankingById);

app.listen(port, hostname, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});