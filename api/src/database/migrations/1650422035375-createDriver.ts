import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createDriver1650422035375 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'driver',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            default: 0
          },
          {
            name: 'company_id',
            type: 'int',
          },
          {
            name: 'city',
            type: 'int',
            isNullable: true
          },
          {
            name: 'first_name',
            type: 'varchar(100)',
            isNullable: false,
          },
          {
            name: 'last_name',
            type: 'varchar(100)',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar(100)',
            isUnique: true,
            isNullable: false
          },
          {
            name: 'phone',
            type: 'varchar(100)',
            isNullable: false
          },
          {
            name: 'avatar_url',
            type: 'varchar(200)',
            isNullable: true
          },
          {
            name: 'status',
            type: 'varchar(20)',
          },
          {
            name: 'creation_date',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ]
      })
    );

    const foreignKey = new TableForeignKey({
        columnNames: ['company_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'company',
        onDelete: 'CASCADE'
    });

    await queryRunner.createForeignKey('driver', foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('driver')
  }

}
