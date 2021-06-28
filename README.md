# Backend de exemplo em Node

Este é um projeto básico em NodeJS usado para exemplificar o sistema backend usando NodeJS, Express e Mongoose. Com ele, é possível realizar as operações:
1. Cadastro de um produto
2. Listagem de produtos
3. Edição de um produto
4. Deleção de um produto

## Como usar?

Após baixado o projeto, execute o comando `npm install` na pasta raiz do sistema. Abra o MongoDB e crie um banco de dados chamado de `bancoTeste` (basta acessar o console do MongoDB e digitar `use bancoTeste`).

Feito isso, volte para a pasta raiz deste projeto e execute o comando `node server.js`. Se estiver tudo OK, deverá surgir a mensagem:
```
    Servidor está executando na porta 8080.
    Conectado ao banco de dados
    

Rotas disponívels
/api/sc3003299/produtos

GET: Retorna todos os livros cadastrados
POST: Cadastra um novo livro
-- itens requeridos:
--- titulo: string contendo o nome do livro
--- descricao: string com a descrição do livro
--- preco: valor do livro (tipo double)

/api/sc3003299/produtos/:id

GET: Busca o livro com o ID informado
PUT: Altera o livro com o ID informado
DELETE: Deleta o livro com o ID informado