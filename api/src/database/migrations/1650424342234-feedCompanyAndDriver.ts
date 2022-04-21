import { MigrationInterface, QueryRunner } from "typeorm";

export class feedCompanyAndDriver1650424342234 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const saved = await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('company')
      .values([
        {
          name: 'Shippify',
          city: 1,
          status: 'active',
          planType: 'idk'
        },
        {
          name: 'teceo',
          city: 34,
          status: 'active',
          planType: 'startup'
        },
      ])
      .execute();

    const shippifyId = saved.identifiers[0].id;
    const teceoId = Number(shippifyId) + 1;

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('driver')
      .values([
        {
          companyId: shippifyId,
          firstName: 'Joao',
          lastName: 'Guis',
          city: 30,
          email: 'joao.guis2001@gmail.com',
          phone: '+5541991194690',
          status: 'active',
        },
        {
          companyId: teceoId,
          firstName: 'Ana',
          city: 30,
          email: 'ana@gmail.com',
          phone: '+5547992293634',
          status: 'inactive',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from('company')
      .where('name in (:...names)', { names: ['Shippify', 'teceo'] })
      .execute();

      await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from('driver')
      .where('email in (:...emails)', { emails: ['joao.guis2001@gmail.com', 'ana@gmail.com'] })
      .execute();
  }

}
