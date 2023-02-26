import { Request, Response, NextFunction } from "express";

export const loggedMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Middleware running!");

  next();
};

/* Esse código define um middleware para o framework Express.js. Um middleware é uma função que pode ser executada antes ou depois do handler
principal de uma rota, permitindo adicionar lógica extra à requisição e resposta.

Neste caso, a função loggedMiddleware simplesmente exibe uma mensagem no console, informando que o middleware foi executado, e em seguida,
chama a função next(), que permite a execução do próximo middleware ou do handler principal da rota. */