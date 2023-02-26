import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TasksEntity } from "./tasks.entity";

@Entity({
  name: "users",
})
export class UserEntity {
  @PrimaryGeneratedColumn("uuid") id!: string;

  // @PrimaryColumn({
  //   length: 60,
  // })
  // id!: string;

  @Column({
    length: 60,
    nullable: true,
    unique: true,
  })
  name!: string;

  @Column({
    length: 10,
    nullable: true,
  })
  pass!: string;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt!: Date;

  @OneToMany(() => TasksEntity, (tasks) => tasks.user)
  tasks!: TasksEntity[];
}

/* Esse código é uma definição de entidade (classe) em TypeORM para um modelo de usuário. 
Ele define a estrutura da tabela "users" no banco de dados.

Os atributos da entidade representam as colunas da tabela, como o nome do usuário, senha, data de criação, data de atualização, etc. 
O decorator @Entity é usado para identificar a classe como uma entidade do banco de dados, e o decorator @Column é usado para identificar 
as colunas da tabela.

O atributo "tasks" é definido como uma relação de um-para-muitos com a entidade "TasksEntity" por meio do decorator @OneToMany. 
A relação especifica que um usuário pode ter várias tarefas associadas a ele. 
O decorator @JoinColumn é usado para especificar a coluna que faz referência à chave primária da entidade relacionada, e a opção "inverse"
 do decorator @OneToMany especifica o nome do atributo na entidade relacionada que faz referência à entidade atual.

Por fim, os decorators @CreateDateColumn e @UpdateDateColumn são usados para registrar a data e hora da criação e 
atualização de cada registro na tabela. */
