import { MigrationInterface, QueryRunner } from "typeorm"

export class LandingTasks1676602163380 implements MigrationInterface {
    name = "LandingTasks1676602163380";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `ALTER TABLE "Tasks"."tasks" ALTER COLUMN "arquivada" SET DEFAULT '0'`
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `ALTER TABLE "Tasks"."tasks" ALTER COLUMN "arquivada" SET DEFAULT false`
      );
    }
  }


/* Este código é uma migration que altera a coluna arquivada na tabela tasks. Na função up(),
a migration altera a coluna para que o valor padrão seja '0', e na função down() a migration reverte essa mudança definindo o valor padrão
como false. As migrations são usadas para versionar e gerenciar as mudanças em bancos de dados,
permitindo que diferentes versões do esquema de banco de dados sejam aplicadas ou revertidas de forma controlada. */