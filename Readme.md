Projeto Integrador

The Game. Educação em um click


Integrantes:

Andrews Vieira;

Alisson Vieira;

Jair Schwan;

Victor Georges.
----------------------------------------------------------------------

O jogo The Game foi dividido em programa cliente e programa servidor.
Esse projeto é o the-game-be, sendo ele o programa servidor.

Assim sendo, clone esse projeto no repositório do git: gitclone https://github.com/Schwaaan/the-game-be.git

----------------------------------------------------------------------

PARA QUE SEJA POSSÍVEL EXECUTAR O PROJETO 

É necessário que haja o a instalação do Node.Js, Cors, Dotenv, mysql2, JsonWebToken, Sequelize , Express,  Express-validator, React.Js
Para isso, utilize dos seguintes comandos:

*(Instalação o gerenciador de pacotes do Node.JS-(NPM).
npm init -y
npm install cors, dotenv, mysql2, jsonwebtoken, sequelize, express, express-validator


*(Instalação do React.JS)
npm install -g create-react-app

*(Criação da pasta do Front_end para utilização do React.JS)
npx create-react-app form_frontend

----------------------------------------------------------------------
INSTRUÇÕES PARA EXECUTAR O BANCO DE DADOS

*O arquivo db_schemas.sql deve estar ou na máquina local (localhost) ou dentro da instância da AWS-Amazon.


*No arquivo (.env), alter o campo HOST para o ip da máquina utilizada (localhost ou DNS público AWS-Amazon)


*Banco de dados utilizado para execução do presente projeto é utilizando o Banco de Dados MYSQL

Vale lembrar que a tecnologia utilizada para portabilidade dos comandos SQL, é utilizando o Mapeamento Objeto-Relacional-(ORM) com Sequelize
Considerando esse fato, execute o comando:

sudo mysql < db_schema.sql

----------------------------------------------------------------------

INSTRUÇÕES PARA EXECUTAR O SERVIDOR


No diretório the-game-be, encontrar o arquivo "server.js" e executar o comando: node server.js
