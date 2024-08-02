// src/procurement/procurement.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcurementController } from './meanprocurementMethod.Controller';
import { ProcurementService } from './MeanprocurementMethod.service';
import { MeanProcurement } from './meanprocurementMethod.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MeanProcurement])],
  controllers: [ProcurementController],
  providers: [ProcurementService],
})
export class ProcurementModule {}
