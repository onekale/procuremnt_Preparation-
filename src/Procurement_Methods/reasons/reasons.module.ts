import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReasonsService} from './reasons.service';
import { Reasons } from './reasons.entity';
import { ReasonsController } from './reasons.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reasons])],
  providers: [ReasonsService],
  controllers: [ReasonsController],
})
export class ReasonsModule {}