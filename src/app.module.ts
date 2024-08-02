// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './budget/budget.entity';
import { BudgetModule } from './budget/budget.module';
import { NcbModule } from './Procurement_Methods/NCB/ncb.module';
import { Ncb } from './Procurement_Methods/NCB/ncb.entity';
import { ReasonsModule } from './Procurement_Methods/reasons/reasons.module';
import { Reasons } from './Procurement_Methods/reasons/reasons.entity';
import { MeanProcurement } from './Procurement_Methods/MeanprocurementMethod/meanprocurementMethod.entity'
import { ProcurementModule } from './Procurement_Methods/MeanprocurementMethod/meanprocurementMethod.Module';
@Module({
  imports: [
  
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1332',
      database: 'base',
      entities: [Budget,Ncb,Reasons,MeanProcurement],
      synchronize: true,
    }),
    BudgetModule,
    NcbModule,
    ReasonsModule,
    ProcurementModule
  ],
})
export class AppModule {}
