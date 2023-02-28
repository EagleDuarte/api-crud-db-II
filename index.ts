import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { tasksRoutes } from "./routes/tasks.routes";
import { userRoutes } from "./routes/user.routes";
import { DatabaseConnection } from "./database/config/connection";

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/tasks", tasksRoutes);
app.use("/user", userRoutes);

DatabaseConnection.connect().then(() => {
  console.log("Database is running");
  app.listen(port, () => {
    console.log("API running at port --->" + port);
  });
});

/* Este código inicia um servidor web utilizando a biblioteca Express em conjunto com as rotas definidas nos arquivos 
tasksRoutes e userRoutes. A variável "port" determina a porta em que o servidor irá escutar, 
que é obtida a partir da variável de ambiente "process.env.PORT" ou, caso esta não esteja definida, a porta 3000 é utilizada.

O método "app.use" é utilizado para definir middlewares que serão executados antes de cada requisição. 
Nesse caso, são definidos dois middlewares: um para habilitar a interpretação de JSON nas requisições ("express.json()") 
e outro para permitir requisições vindas de diferentes domínios ("cors()").
Também é definido um middleware para permitir o acesso a recursos da API por meio de diferentes domínios. 
Por fim, é realizada a conexão com o banco de dados (utilizando o método "DatabaseConnection.connect()") 
e o servidor é iniciado na porta definida. */
