import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  budgetId: string;

  @Column()
  budgetYearId: string;

  @Column()
  currency: string;

  @Column()
  description: string;

  @Column({ type: 'boolean' })
  isMultiYear: boolean;

  @Column()
  name: string;

  @Column()
  procurementApplication: string;

  @Column()
  remark: string;

  @Column(({ type: 'decimal', precision: 10, scale: 2, }))
  totalEstimatedAmount: number;

  @Column()
  type: string;

}
