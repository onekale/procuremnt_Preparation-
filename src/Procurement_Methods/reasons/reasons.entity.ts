import {Entity, Column , PrimaryGeneratedColumn } from 'typeorm'

Entity()
export class Reasons {
   @PrimaryGeneratedColumn()
   id: number;

    @Column()
    procurementRequisitionId: string;

    @Column()
    reason: string;

    @Column()
    remark: string;

    @Column()
    type: string;
}