# Desafio Técnico Back-end

- Projeto desafio feito com base nas instruções do repositório original: https://github.com/linkiodental/order-management-challenge

# Tecnologias utilizadas

- Express.js
- TypeScript & Node.js
- Mongoose & MongoDB
- JsonWebToken
- Bcrypt

# Como usar

1. Clone o repositório:

```
git clone https://github.com/kev1n999/order-management-challenge
```

2. Entre na pasta do projeto:

```
cd order/management-challenge
```

3. Instale as dependências:

```
npm install
```

3. Crie um .env na raiz do projeto e configure as variáveis do ambiente:

```
SERVER_PORT=4000
MONGO_URI=mongo-uri
JWT_SECRET=jwt-secret
```

4. Rode o servidor pelo comando:

```
npm run server
```

## Rotas disponíveis

- **POST** `/api/auth/register`  
  Para registrar um novo usuário
  ```
  {
    "email: "example@email.com"
    "password: "1234"
  }
  ```
- **POST** `/api/auth/login`  
  Para fazer login

  ```
  {
  "email: "example@email.com"
  "password: "1234"
  }
  ```

- **GET / POST** `/api/orders/`  
  Para criar um pedido(POST):
  ```
  {
    "lab": "lab-example",
    "patient": "patient-example",
    "customer": "customer-example",
    "services": [
      { "name": "Service1", "value": "100"}
    ]
  }
  ```

  Para listar um pedido com filtro no state(GET):
  ```
    {
      "state": "CREATED" | "ANALYSIS" | "COMPLETED"
    }
  ```

- **PATCH** `/api/orders/:id/advance`  
  Para avançar estados do pedido a partir do ID

  ```
  PATCH /api/orders/order_id_example/advance
  ```
