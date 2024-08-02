import { Injectable } from '@nestjs/common';
import {  InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ncb } from './ncb.entity';
import { CreateNcbDto } from './create-ncb.dto';



@Injectable()

export class NcbService {

    private procurementType = ['Goods', 'Work', 'Non Consulting Services', 'Consultancy Services'];

    constructor(
        @InjectRepository(Ncb)
        private ncbRepository: Repository<Ncb>,
      ) {}

      private getRandomProcurementType(): string {
        const randomIndex = Math.floor(Math.random() * this.procurementType.length);
        return this.procurementType[randomIndex];
      }

      async CreateProcurumentNCBMethod(createNcbDto: CreateNcbDto): Promise<Ncb>{

        const newNcb = this.ncbRepository.create(
            {
                procurementCategory: this.getRandomProcurementType(),
                valueThreshold: 0
            }
        );
        return this.ncbRepository.save(newNcb);

      }
      

}