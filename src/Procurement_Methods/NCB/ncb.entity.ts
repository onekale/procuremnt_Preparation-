import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Ncb {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    procurementCategory: string;

    @Column()
    valueThreshold: number;
}