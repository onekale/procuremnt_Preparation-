// src/entities/procurement.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MeanProcurement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'jsonb', default: '{}' })
  contract: Record<string, any>;

  @Column('jsonb', { default: '[]' })
  donor: any[];

  @Column()
  fundingSource: string;

  @Column({ type: 'boolean', default: false })
  isOnline: boolean;

  @Column('jsonb', { default: '[]' })
  justification: { key: string; status: string }[];

  @Column()
  procurementMethod: string;

  @Column()
  procurementRequisitionId: string;

  @Column()
  procurementType: string;

  @Column('jsonb', { default: '[]' })
  targetGroup: string[];
}
