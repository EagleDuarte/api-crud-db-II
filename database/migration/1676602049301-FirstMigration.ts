import { MigrationInterface, QueryRunner } from "typeorm"

export class firstMig1676602049301 implements MigrationInterface {
    name = 'firstMig1676602049301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tasks"."tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(60), "detail" character varying(60), "arquivada" boolean DEFAULT '0', "id_user" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Tasks"."users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60), "pass" character varying(10), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Tasks"."tasks" ADD CONSTRAINT "FK_44fe0c59b0e8f8077b1d9c27f75" FOREIGN KEY ("id_user") REFERENCES "Tasks"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tasks"."tasks" DROP CONSTRAINT "FK_44fe0c59b0e8f8077b1d9c27f75"`);
        await queryRunner.query(`DROP TABLE "Tasks"."users"`);
        await queryRunner.query(`DROP TABLE "Tasks"."tasks"`);
    }
}

/* Esse é um exemplo de uma migração de banco de dados usando a biblioteca TypeORM. 
A migração é responsável por criar as tabelas e suas colunas, 
bem como definir as chaves primárias e estrangeiras e os relacionamentos entre elas.

Na função up, que é executada quando a migração é aplicada, são executados três comandos SQL. 
O primeiro comando cria a tabela tasks com sete colunas: id, description, detail, arquivada, id_user, created_at e updated_at.
A coluna id é uma chave primária gerada automaticamente em UUID e as colunas created_at e updated_at têm valores padrão definidos 
como a data e hora atual. O segundo comando cria a tabela users com cinco colunas: id, name, pass, created_at e updated_at. 
Novamente, a coluna id é uma chave primária gerada automaticamente em UUID e as colunas created_at e updated_at têm valores padrão definidos
como a data e hora atual. O terceiro comando adiciona uma restrição de chave estrangeira na coluna id_user da tabela tasks, 
referenciando a coluna id da tabela users.

Na função down, que é executada quando a migração é revertida, os comandos SQL são executados em ordem inversa, de modo que a tabela tasks 
é excluída primeiro, seguida pela tabela users, e a restrição de chave estrangeira na tabela tasks é removida por último. */