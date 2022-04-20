import { Column, Entity, OneToMany } from "typeorm";
import { Driver } from "../../driver/models";
import { BaseModel } from "../../entity";

@Entity('company')
export class Company extends BaseModel<Company>{
    @Column({ unique: true })
    name: string;

    @Column()
    city: number;

    @Column()
    status: string;

    @Column({ name: 'plan_type' })
    planType: string;
    
    @OneToMany(() => Driver, driver => driver.company)
    drivers: Driver[]
}