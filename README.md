# Node.js TaskList API

Esta é uma API desenvolvida em Node.js para gerenciar uma lista de tarefas (tasklist).
Ela inclui controladores para usuários, tarefas e sessões, além de fazer uso de middlewares para garantir a segurança e integridade dos dados.
O banco de dados utilizado é o PostgreSQL.

## Instale as dependências:
``` shell script 
npm install
```

## Endpoints
### 1. Usuários

Cria um novo usuário.
* Login de Usuário:

`POST /api/users `

Autentica o usuário e gera um token de acesso.
### 2. Tarefas
* Listar Todas as Tarefas:

`GET /api/tasks`

Retorna todas as tarefas.
* Criar Tarefa:

`POST /api/tasks`

Cria uma nova tarefa.
* Atualizar Tarefa:

`PUT /api/tasks/:id`

Atualiza os detalhes de uma tarefa existente.

* Remover Tarefa:

`DELETE /api/tasks/:id`

Remove uma tarefa.

### 3. Sessões
* Informações da Sessão Atual:

`POST /api/sessions`

Retorna informações sobre a sessão atual do usuário e loga o usuário já criado.

## Middlewares
### Autenticação:

middleware/auth.js: Verifica a autenticidade do token de acesso.


