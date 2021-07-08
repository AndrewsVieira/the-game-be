<h1 align="center">The Game - Educação em um click</h1>

<h3>Integrantes: </h3>
<table>
  <tr>
    <td align="center"><a href="https://github.com/AndrewsVieira"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/64992771?v=4" width="100px;" alt=""/></a><br /><sub><b>Andrews Vieira</b></sub><br />👨‍🚀</td>
     <td align="center"><a href="https://github.com/victorgeorges"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/1271902?v=4" width="100px;" alt=""/></a><br /><sub><b>Victor Georges</b></sub><br />👨‍🚀</td>
     <td align="center"><a href="https://github.com/alissonfv"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61033933?v=4" width="100px;" alt=""/> </a><br /><sub><b>Alisson Vieira</b></sub><br />👨‍🚀</td>
     <td align="center"><a href="https://github.com/Schwaaan"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/49553583?v=4" width="100px;" alt=""/></a><br /><sub><b>Jair Schwan</b></sub><br />👨‍🚀</td>
 </tr>
</table>

<h3>Descrição do projeto: </h3>
<p>O jogo The Game foi dividido em programa cliente e programa servidor.
Esse projeto é o the-game-be, sendo ele o programa servidor.

Assim sendo, clone esse projeto no repositório do git: git clone https://github.com/Schwaaan/the-game-be.git </p>
 <h3>Tecnologias </h3>
<p>As seguintes ferramentas foram usadas na construção do projeto:</p>

- [Node JS]()
- [Cors]()
- [DotEnv]()
- [MySql]()
- [Json Web Token]()
- [Sequelize]()
- [Express]()
- [Express-Validator]()

<h3> Como rodar o projeto </h3>

<p>É necessário que haja o a instalação do Node.Js, Cors, Dotenv, mysql2, JsonWebToken, Sequelize , Express,  Express-validator<br></br>
        Para isso, utilize dos seguintes comandos:</p>

*(Instalação o gerenciador de pacotes do Node.JS-(NPM).


npm init -y


npm install cors, dotenv, mysql2, jsonwebtoken, sequelize, express, express-validator


*(Instalação do React.JS)


npm install -g create-react-app

*(Criação da pasta do Front_end para utilização do React.JS)


npx create-react-app form_frontend

<h3>INSTRUÇÕES PARA EXECUTAR O BANCO DE DADOS</h3>

*O arquivo db_schemas.sql deve estar onde o banco de dados está sendo executado, na máquina (localhost) ou dentro da instância da AWS-Amazon.


*No arquivo (.env), alter o campo HOST para o ip da máquina utilizada (localhost ou DNS público AWS-Amazon)


*Banco de dados utilizado para execução do presente projeto é utilizando o Banco de Dados MYSQL

Vale lembrar que a tecnologia utilizada para portabilidade dos comandos SQL, é utilizando o Mapeamento Objeto-Relacional-(ORM) com Sequelize
Considerando esse fato, execute o comando:

sudo mysql < db_schema.sql

<h3>INSTRUÇÕES PARA EXECUTAR O SERVIDOR</h3>


No diretório the-game-be, encontrar o arquivo "server.js" e executar o comando: node server.js
