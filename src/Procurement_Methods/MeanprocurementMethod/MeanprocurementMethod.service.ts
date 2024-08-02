import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MeanProcurement } from './meanprocurementMethod.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class ProcurementService {
  private procurementMethods = [
    'National Competitive Bidding (NCB)',
    'Open Tender',
    'Request for Proposals (RFP)',
    'Direct Procurement',
  ];

  private procurementTypes = [
    'Consultancy Services',
    'Goods and Services',
    'Works',
    'Others',
  ];

  constructor(
    @InjectRepository(MeanProcurement)
    private procurementRepository: Repository<MeanProcurement>,
  ) {}

  private getRandomProcurementMethod(): string {
    const randomIndex = Math.floor(Math.random() * this.procurementMethods.length);
    return this.procurementMethods[randomIndex];
  }

  private getRandomProcurementType(): string {
    const randomIndex = Math.floor(Math.random() * this.procurementTypes.length);
    return this.procurementTypes[randomIndex];
  }

  private getRandomJustification(): any[] {
    return [
      { key: 'procurementMethod', status: faker.helpers.arrayElement(['pass', 'fail']) },
      { key: 'targetGroup', status: faker.helpers.arrayElement(['pass', 'fail']) },
    ];
  }

  async createProcurement(): Promise<MeanProcurement> {
    const newProcurement = this.procurementRepository.create({
      contract: {},  // Assuming this is an empty object, you can adjust as needed
      donor: [],     // Assuming this is an empty array, you can adjust as needed
      fundingSource: "Internal Revenue",
      isOnline: faker.datatype.boolean(),
      justification: this.getRandomJustification(),
      procurementMethod: this.getRandomProcurementMethod(),
      procurementRequisitionId: faker.datatype.uuid(),
      procurementType: this.getRandomProcurementType(),
      targetGroup: [faker.lorem.word()],
      id: faker.datatype.uuid(), // UUID for the procurement ID
    });

    return this.procurementRepository.save(newProcurement);
  }
}
