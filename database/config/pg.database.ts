import { Pool } from "pg";

export const dbConnection = new Pool({
  connectionString:
    "postgres://bcsboppl:c6BXGEdalK9aexWLdh5R4ePOn2jXxY1Z@babar.db.elephantsql.com/bcsboppl",

  // Another option of connection:
  /* host: "postgres://bcsboppl:c6BXGEdalK9aexWLdh5R4ePOn2jXxY1Z@babar.db.elephantsql.com/bcsboppl",
     user: "bcsboppl",
     password: "c6BXGEdalK9aexWLdh5R4ePOn2jXxY1Z",
     database: "bcsboppl",
     port: 5432, */

  ssl: {
    rejectUnauthorized: false,
  },
});

/* Este código é utilizado para estabelecer uma conexão com um banco de dados PostgreSQL usando o módulo pg do Node.js. 
A conexão é configurada usando um objeto Pool que define as opções de conexão. 

Existem duas opções mostradas no código, ambas apontando para o mesmo banco de dados hospedado no ElephantSQL. 
A primeira opção usa uma string de conexão que contém todas as informações necessárias (nome de usuário, senha, endereço do host,
nome do banco de dados) em um único lugar. A segunda opção usa um objeto com as mesmas informações, 
mas divididas em propriedades distintas. */
