import { Tasks } from "../../models/tasks";
import { DatabaseConnection } from "../config/connection";
import { TasksEntity } from "../entities/tasks.entity";

interface UpdateTasksDTO {
  description?: string;
  detail?: string;
  arquivada?: boolean;
  id_user?: string;
}

export class TasksRepository {
  private _repository =
    DatabaseConnection.connection.getRepository(TasksEntity);

  public async list() {
    return await this._repository.find({
      relations: {
        user: true,
      },
    });
  }

  public async get(id: string) {
    return await this._repository.findOneBy({
      id,
    });
  }

  public async create(tasks: Tasks) {
    const tasksEntity = this._repository.create({
      id: tasks.id,
      description: tasks.description,
      detail: tasks.detail,
      id_user: tasks.user.id,
      // arquivada: tasks.arquivada,
    });

    return await this._repository.save(tasksEntity);
  }

  public async update(tasksEntity: TasksEntity, data: UpdateTasksDTO) {
    if (data.description) {
      tasksEntity.description = data.description;
    }

    if (data.detail) {
      tasksEntity.detail = data.detail;
    }

    if (data.id_user) {
      tasksEntity.id_user = data.id_user;
    }

    return await this._repository.save(tasksEntity);
  }

  public async arquivar(tasksEntity: TasksEntity, data: UpdateTasksDTO) {
    if (data.arquivada) {
      tasksEntity.arquivada = data.arquivada;
    }

    return await this._repository.save(tasksEntity);
  }

  public async delete(id: string) {
    return await this._repository.delete({ id });
  }
}

/* Este código representa uma classe TasksRepository que é usada para realizar operações CRUD (criar, ler, atualizar e deletar)
em uma entidade Tasks. Ela importa uma interface UpdateTasksDTO, que define as propriedades que podem ser atualizadas em uma tarefa 
(description, detail, arquivada e id_user).

A classe possui um atributo privado chamado _repository, que é inicializado com uma instância do repositório TasksEntity, 
obtido a partir do objeto de conexão com o banco de dados. 

Existem cinco métodos na classe. O método list() retorna todas as tarefas com a relação com a entidade User carregada. 
O método get() retorna uma única tarefa com base em um id fornecido. O método create() insere uma nova tarefa no banco de dados. 
O método update() atualiza uma tarefa existente com base em um objeto TasksEntity e nos dados fornecidos pela interface UpdateTasksDTO.
O método arquivar() define o valor da propriedade arquivada de uma tarefa e salva as alterações no banco de dados.
E o método delete() exclui uma tarefa do banco de dados com base em um id fornecido. */
