import {
  // listaTasks,
  Tasks,
} from "../models/tasks";
import { User } from "../models/user";

export const tasksList = [
  new Tasks("teste 01", "teste 01"),
  new Tasks("teste 02", "teste 02"),
];

export const userList = [
  new User("ricardo@teste.com", "0987!", "0987!"),
  new User("teste@teste.com", "1234@", "1234@"),
];

/* O código acima exporta duas constantes: tasksList e userList.

- tasksList é um array de objetos da classe Tasks, com duas tarefas de teste, 
cada uma com um título e uma descrição.

- userList é um array de objetos da classe User, com dois usuários de teste, cada um com um e-mail e uma senha. 
Esses objetos são usados para realizar testes em outras partes do código ou para inicializar o estado do sistema. */
