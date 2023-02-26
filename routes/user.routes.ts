import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.get("/", new UserController().list);
userRoutes.get("/:id", new UserController().get);
userRoutes.post("/", new UserController().create);
userRoutes.post("/login", new UserController().login);
userRoutes.put("/:id", new UserController().update);

export { userRoutes };

/* Este código é responsável por criar rotas relacionadas ao CRUD de usuários em uma aplicação web usando o framework Express.

Aqui é importado o módulo Router do Express, criado uma instância de Router e então definidas as rotas de usuário, 
cada uma associada a um método do UserController.

As rotas disponíveis são:

GET / - Lista todos os usuários
GET /:id - Retorna os dados de um usuário específico
POST / - Cria um novo usuário
POST /login - Realiza o login do usuário
PUT /:id - Atualiza os dados de um usuário específico
As rotas são exportadas como um objeto para que possam ser utilizadas no arquivo principal da aplicação. */
