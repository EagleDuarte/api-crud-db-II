import { DataSource } from "typeorm";
import "dotenv/config";

export default new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  entities: ["src/database/entities/**/*.ts"],
  migrations: ["src/database/migration/**/*.ts"],
  schema: "Tasks",
});

/* O código acima exporta uma instância de conexão com banco de dados usando o TypeORM, 
uma biblioteca para gerenciamento de banco de dados em aplicações Node.js.

O objeto DataSource é criado com diversas configurações para se conectar a um banco de dados Postgres. 
O type indica qual tipo de banco de dados está sendo utilizado.
A url é uma string de conexão com informações do banco de dados, como nome do servidor, nome do banco de dados, usuário e senha. 
A configuração ssl indica que não será verificado o certificado SSL do banco de dados, 
o que pode ser útil em alguns ambientes de desenvolvimento. A opção synchronize é configurada como false, o que significa que o 
TypeORM não deve sincronizar automaticamente as entidades com o banco de dados. 
As opções entities e migrations apontam para os diretórios onde estão as entidades e migrações do projeto. 
Por fim, a configuração schema indica qual schema deve ser utilizado no banco de dados. */
