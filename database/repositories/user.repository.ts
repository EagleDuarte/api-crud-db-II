import { DatabaseConnection } from "../config/connection";
import { User } from "../../models/user";
import { UserEntity } from "../entities/user.entity";

interface UpdateUserDTO {
  name?: string;
  pass?: string;
}

export class UserRepository {
  private _repository = DatabaseConnection.connection.getRepository(UserEntity);

  public async list() {
    return await this._repository.find({
      relations: {
        tasks: true,
      },
    });
  }

  public async get(name: string) {
    return await this._repository.findOne({
      where: {
        name,
      },
      relations: {
        tasks: true,
      },
    });
  }

  public async getId(id: string) {
    return await this._repository.findOne({
      where: {
        id,
      },
      relations: {
        tasks: true,
      },
    });
  }

  public async create(user: User) {
    const userEntity = this._repository.create({
      id: user.id,
      name: user.name,
      pass: user.pass,
    });

    return await this._repository.save(userEntity);
  }

  public async update(userEntity: UserEntity, data: UpdateUserDTO) {
    if (data.name) {
      userEntity.name = data.name;
    }

    if (data.pass) {
      userEntity.pass = data.pass;
    }

    return await this._repository.save(userEntity);
  }
}

/* Este código define uma classe UserRepository que serve como uma interface para o acesso e manipulação de usuários no banco de dados.
A classe usa a biblioteca TypeORM para acessar o banco de dados e inclui métodos para listar, obter, criar e atualizar usuários.

A classe inclui uma interface UpdateUserDTO que define os campos que podem ser atualizados em um usuário existente,
incluindo name e pass. O método update da classe usa essa interface para aplicar as atualizações necessárias 
a um usuário existente no bancode dados.

O método list retorna uma lista de todos os usuários no banco de dados, incluindo todas as suas tarefas relacionadas.
 O método get é usado para obter um usuário específico pelo nome. O método getId é usado para obter um usuário específico pelo ID. 
 O método create é usado para criar um novo usuário no banco de dados. */