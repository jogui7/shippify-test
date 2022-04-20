import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createVehicle1650422671337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'vehicle',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'driver_id',
              type: 'int',
            },
            {
              name: 'plate',
              type: 'varchar(100)',
            },
            {
              name: 'model',
              type: 'varchar(100)',
            },
            {
              name: 'type',
              type: 'varchar(20)',
            },
            {
              name: 'capacity',
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
          columnNames: ['driver_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'driver',
          onDelete: 'CASCADE'
      });

      await queryRunner.createForeignKey('vehicle', foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('vehicle')
    }

}
