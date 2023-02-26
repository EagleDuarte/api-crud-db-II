import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({
  name: "tasks",
})
export class TasksEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  // @PrimaryColumn({
  //   length: 60,
  // })
  // id!: string;

  @Column({
    nullable: true,
    length: 60,
  })
  description!: string;

  @Column({
    nullable: true,
    length: 60,
  })
  detail!: string;

  @Column({
    // nullable: true,
    // type: "boolean",
    default: 0,
  })
  arquivada!: boolean;

  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: "id_user",
  })
  user!: UserEntity;

  @Column({
    name: "id_user",
  })
  id_user!: string;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt!: Date;
}

/* Este código é responsável por definir a entidade TasksEntity, que representa uma tabela no banco de dados 
que armazena informações sobre tarefas.

A entidade possui as seguintes colunas:

id: uma coluna primária gerada automaticamente pelo banco de dados e representada por um UUID.
description: uma coluna que armazena a descrição da tarefa.
detail: uma coluna que armazena os detalhes da tarefa.
arquivada: uma coluna booleana que indica se a tarefa foi arquivada ou não.
user: uma coluna que armazena uma referência a um usuário, representada pela entidade UserEntity, que é definida em outro arquivo.
id_user: uma coluna que armazena o ID do usuário que criou a tarefa.
createdAt: uma coluna que armazena a data e hora em que a tarefa foi criada.
updatedAt: uma coluna que armazena a data e hora da última atualização da tarefa.
Através do uso do decorator @Entity, é possível definir o nome da tabela que será criada no banco de dados. Além disso,
 são usados outros decorators como @PrimaryGeneratedColumn, @PrimaryColumn, @Column, @ManyToOne, @JoinColumn, @CreateDateColumn 
 e @UpdateDateColumn para definir as propriedades da tabela e seus relacionamentos com outras entidades. */
