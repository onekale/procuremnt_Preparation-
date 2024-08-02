import { Injectable } from '@nestjs/common';
import {  InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reasons } from './reasons.entity';
import { CreateReasonsDto } from './create-reasons.dto';
import { faker } from '@faker-js/faker';



@Injectable()

export class ReasonsService {

    private procurementType = ['Unexpected changes in project scope or specifications.', 'Change in supplier availability due to unforeseen events (e.g., natural disasters, economic crises).'];
    
    constructor(
        @InjectRepository(Reasons)
        private reasonsRepository: Repository<Reasons>,
      ) {}

      private getRandomProcurementType(): string {
        const randomIndex = Math.floor(Math.random() * this.procurementType.length);
        return this.procurementType[randomIndex];
      }

      async CreateProcurumentReasonsMethod(createreasonsDto: CreateReasonsDto): Promise<Reasons>{

        const { type } = createreasonsDto;
        const newreasons = this.reasonsRepository.create(
            {
                procurementRequisitionId : '9aaeca7c-50fc-4599-8ba6-6174f6aa90de',
                reason : this.getRandomProcurementType(),
                remark : this.getRandomProcurementType(),
                type : type
            }
        );

        console.log("new generated Metod")
        return this.reasonsRepository.save(newreasons);

      }
      

}