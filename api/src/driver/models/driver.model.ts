import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Company } from "../../company/models";
import { BaseModel } from "../../entity";
import { Vehicle } from "../../vehicle/models";

@Entity('driver')
export class Driver extends BaseModel<Driver>{
    @ManyToOne(() => Company, company => company.drivers)
    @JoinColumn({ name: 'company_id', referencedColumnName: 'id' })
    company: Company;

    @Column()
    city: number;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column({ name: 'avatar_url' })
    avatarUrl: string;

    @Column()
    status: string;

    @OneToMany(() => Vehicle, vehicle => vehicle.driver)
    vehicles: Vehicle[]
}