# Desafio Sharenergy
Aplicação backend e frontend com login, CRUD de clientes e integração de apis.

## Banco de dados

1 - Para rodar este projeto, você deve ter instalado em sua computador o MongoDB versão 6.0.3, você pode baixar o servidor comunitário em https://www.mongodb.com/try/download/community, caso deseje, também pode baixar o Compass para administrar os bancos em https://www.mongodb.com/try/download/compass.

2 - Após instalado, você deve criar um banco de dados com o nome que desejar e dentro dele deve criar duas collections, uma denominada `users` e outra `clients`.

3 - Em `users` você deve criar um documento que contenha `username` que recebe o valor `desafiosharenergy`  e `password` que recebe o valor `sh@r3n3rgy`.

4 - Em `clients` você deve criar um documento que contenha um objeto `nomeCompleto` que recebe `nome` e `sobrenome`, `email`, `telefone`, `endereco` e `cpf`, todos nessa ordem, os valores ficam a seu critério.

## Instalação

Após ter criado o banco de dados e configurando as collections, você deverá acessar as páginas backend e frontend em seu terminal, e em cada uma delas dar o comando `npm install`, em seguida o projeto estará pronto para ser rodado.

### Variáveis de ambiente

Em `.env-example`, você encontrará três variáveis de ambiente, em `PORT` você deverá colocar a porta que deseja rodar o seu servidor do backend, em `MONGO_URL` você deverá colocar uma URL no seguinte formato: `mongodb://127.0.0.1:27017/nome-do-banco-criado`, em `JWT_SECRET_KEY` você pode colocar o valor númerico que desejar para gerar o token. Após isso, você deverá alterar o nome do arquivo para `.env`, logo em seguida, a aplicação estará pronta para ser rodado.

## Rodando a aplicação

1 - Primeiro você deverá acessar a pasta backend através do seu terminal e dar o comando `npm run start-dev` para rodar o seu servidor.

2 - Em seguida, acesse a pasta do front-end e der o comando `npm start`.

## Link do vídeo de apresentação

Você poderá assistir um vídeo de apresentação da aplicação em https://www.youtube.com/watch?v=eUosiCCTRyg&t=69s.
