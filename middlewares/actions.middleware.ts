import { Request, Response, NextFunction } from "express";

export const actionsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("LISTAR TODAS TASKS");
  next();
};

/* Este código define uma função middleware chamada actionsMiddleware que registra uma mensagem no console antes de executar a próxima
função middleware na cadeia.

A função recebe três parâmetros: req (objeto de solicitação HTTP), res (objeto de resposta HTTP) e next (função que deve ser chamada
para permitir a continuação do fluxo de execução).

A mensagem registrada no console indica que a lista de todas as tarefas (tasks) foi solicitada através de uma requisição GET HTTP.
A função next() é chamada no final para permitir que a próxima função middleware seja executada na cadeia. */
