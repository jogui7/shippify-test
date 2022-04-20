import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCompany1650419437495 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(100)',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'city',
            type: 'int',
            isNullable: false
          },
          {
            name: 'status',
            type: 'varchar(20)',
          },
          {
            name: 'plan_type',
            type: 'varchar(20)',
            isNullable: false
          },
          {
            name: 'creation_date',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company')
  }
}
