import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ncb } from './ncb.entity';
import { NcbService } from './ncb.service';
import { NcbController } from './ncb.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ncb])],
  providers: [NcbService],
  controllers: [NcbController],
})
export class NcbModule {}