import { v4 as createUuid } from "uuid";

/* Este código define a classe User, que tem um construtor que recebe um nome de usuário e uma senha e gera um UUID único para o usuário. 
Ele também tem getters e setters para o nome e a senha do usuário, bem como um método getUser() que retorna um objeto com as informações 
do usuário. A classe tem um método estático create() que permite a criação de um novo usuário com um ID específico. 
O createUuid importado da biblioteca uuid é usado para gerar o ID do usuário. */

export class User {
  private _id: string;

  constructor(private _name: string, private _pass: string) {
    this._id = createUuid();
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get pass() {
    return this._pass;
  }

  public set pass(pass: string) {
    this._pass = pass;
  }

  public get id() {
    return this._id;
  }

  public getUser() {
    return {
      id: this._id,
      name: this._name,
      pass: this._pass,
    };
  }

  public static create(id: string, name: string, pass: string) {
    const user = new User(name, pass);
    user._id = id;

    return user;
  }
}
