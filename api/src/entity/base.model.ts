import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseModel<T> {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn({ name: 'creation_date' })
    creationDate: Date;

    constructor(data?: Partial<T>) {
        Object.assign(this, data);
    }
}