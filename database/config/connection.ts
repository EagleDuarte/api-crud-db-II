import { DataSource } from "typeorm";
import "dotenv/config";
import typeormConfig from "./config";

export class DatabaseConnection {
  private static _connection: DataSource;

  public static async connect() {
    console.log(process.env.DB_URL);
    if (!this._connection) {
      this._connection = await typeormConfig.initialize();
    }
  }

  public static get connection() {
    if (!this._connection) {
      throw new Error("Database is working!");
    }
    return this._connection;
  }
}

/* Esse código exporta uma classe chamada DatabaseConnection que é responsável por gerenciar a conexão com o banco de dados 
utilizando o TypeORM. A classe possui dois métodos estáticos:

connect(): esse método inicializa a conexão com o banco de dados utilizando as configurações definidas no arquivo config.ts. 
Se a conexão já estiver estabelecida, ele não faz nada. Ele também imprime no console a URL do banco de dados, 
que é definida na variável de ambiente DB_URL. 
connection: esse método retorna a conexão com o banco de dados. Se a conexão ainda não estiver estabelecida, 
ele lança uma exceção informando que a conexão não foi inicializada.
A classe utiliza a configuração de conexão definida no arquivo config.ts para inicializar a conexão com o banco de dados.
O arquivo config.ts exporta uma instância de DataSource configurada para se conectar ao banco de dados PostgreSQL. 
Ele utiliza a URL do banco de dados definida na variável de ambiente DB_URL. */