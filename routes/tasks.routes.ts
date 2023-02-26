import { Router } from "express";
import { TasksController } from "../controllers/tasks.controller";

const tasksRoutes = Router();

tasksRoutes.get("/", new TasksController().list);
tasksRoutes.get("/:id", new TasksController().get);
tasksRoutes.post("/", new TasksController().create);
tasksRoutes.delete("/:id", new TasksController().delete);
tasksRoutes.put("/:id", new TasksController().update);
tasksRoutes.put("/:id", new TasksController().arquivar);

export { tasksRoutes };

/* Este código é responsável por criar as rotas relacionadas às tarefas (tasks) da aplicação utilizando o framework Express.

import { Router } from "express";: importa a classe Router do Express, responsável por gerenciar as rotas da aplicação.
import { TasksController } from "../controllers/tasks.controller";: importa a classe TasksController, 
que contém os métodos responsáveis por lidar com as requisições relacionadas às tarefas.
const tasksRoutes = Router();: cria uma instância da classe Router do Express, que será responsável por 
gerenciaras rotas relacionadas às tarefas.
tasksRoutes.get("/", new TasksController().list);: cria uma rota do tipo GET para a raiz do caminho '/'. 
Essa rota irá chamar o método 'list' da classe TasksController para listar todas as tarefas.
tasksRoutes.get("/:id", new TasksController().get);: cria uma rota do tipo GET para o caminho '/:id', 
em que ':id' é um parâmetro dinâmico. Essa rota irá chamar o método 'get' da classe TasksController para retornar uma tarefa específica,
identificada pelo valor de ':id'.
tasksRoutes.post("/", new TasksController().create);: cria uma rota do tipo POST para a raiz do caminho '/'. 
Essa rota irá chamar o método 'create' da classe TasksController para criar uma nova tarefa.
tasksRoutes.delete("/:id", new TasksController().delete);: cria uma rota do tipo DELETE para o caminho '/:id', 
em que ':id' é um parâmetro dinâmico. Essa rota irá chamar o método 'delete' da classe TasksController para deletar uma tarefa específica,
identificada pelo valor de ':id'.
tasksRoutes.put("/:id", new TasksController().update);: cria uma rota do tipo PUT para o caminho '/:id',
em que ':id' é um parâmetro dinâmico. Essa rota irá chamar o método 'update' da classe TasksController para atualizar uma tarefa específica,
identificada pelo valor de ':id'.
tasksRoutes.put("/:id", new TasksController().arquivar);: cria uma rota do tipo PUT para o caminho '/:id', 
em que ':id' é um parâmetro dinâmico. Essa rota irá chamar o método 'arquivar' da classe TasksController para marcar uma tarefa específica, 
identificada pelo valor de ':id', como arquivada.
Por fim, export { tasksRoutes }; exporta as rotas criadas para que possam ser utilizadas em outros arquivos da aplicação. */
