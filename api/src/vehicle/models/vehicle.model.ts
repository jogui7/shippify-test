import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Driver } from "../../driver/models";
import { BaseModel } from "../../entity";

@Entity('vehicle')
export class Vehicle extends BaseModel<Vehicle>{
    @ManyToOne(() => Driver, driver => driver.vehicles)
    @JoinColumn({ name: 'driver_id', referencedColumnName: 'id' })
    driver: Driver;

    @Column()
    plate: string;

    @Column()
    model: string;

    @Column()
    type: string;

    @Column()
    capacity: string;
}
