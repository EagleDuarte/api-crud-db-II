import { v4 as createUuid } from "uuid";
import { User } from "./user";

/* Este é um código em TypeScript que define a classe Tasks. A classe tem um construtor que recebe os seguintes parâmetros:
 _description, _detail, _user e _arquivada. O parâmetro _arquivada é opcional e, portanto, pode ser omitido. 
 O construtor gera um identificador exclusivo universal (UUID) para cada nova instância criada, armazenado no atributo _id.

A classe também possui vários métodos, incluindo:

get description(): retorna a descrição da tarefa.
get detail(): retorna os detalhes da tarefa.
get arquivada(): retorna se a tarefa foi arquivada ou não.
get id(): retorna o identificador da tarefa.
get user(): retorna o usuário associado à tarefa.
getTasks(): retorna um objeto contendo as propriedades da tarefa.
static create(): um método estático que pode ser usado para criar uma nova instância da classe a partir dos dados fornecidos. Este método é útil quando se deseja criar uma instância a partir dos dados armazenados no banco de dados.
Em resumo, essa classe representa uma tarefa e é usada para criar novas tarefas, atualizar e recuperar tarefas existentes. */

export class Tasks {
  private _id: string;

  constructor(
    private _description: string,
    private _detail: string,
    private _user: User,
    private _arquivada?: boolean
  ) {
    this._id = createUuid();
  }

  public get description() {
    return this._description;
  }

  public get detail() {
    return this._detail;
  }

  public get arquivada() {
    return this._arquivada;
  }

  public get id() {
    return this._id;
  }

  public get user() {
    return this._user;
  }

  // public getTasks() {
  //   return {
  //     id: this._id,
  //     name: this._description,
  //     pass: this._detail,
  //     user: this._user,
  //     arquivada: this._arquivada,
  //   };
  // }

  // public static create(
  //   id: string,
  //   description: string,
  //   detail: string,
  //   user: User,
  //   arquivada?: boolean
  // ) {
  //   const tasks = new Tasks(description, detail, arquivada);
  //   tasks._id = id;

  //   return tasks;
  // }
}
