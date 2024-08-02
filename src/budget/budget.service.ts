import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './budget.entity';
import { faker } from '@faker-js/faker';
import { CreateBudgetDto } from './create-budget.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BudgetService {
  private readonly constantBudgetID = '9093291b-f30d-4470-98d5-1a36f07b500d';
  private readonly constantBudgetYearId = '28974b42-9b86-45d6-b301-69496456dac6';
  private readonly constantType = 'Others';
  
  private readonly counterFilePath = path.resolve(__dirname, '../../src/budget/counter.json');
  private procurementMethods = ['tendering', 'purchasing', 'auction'];

  constructor(
    @InjectRepository(Budget)
    private budgetRepository: Repository<Budget>,
  ) {
    this.ensureCounterFileExists()
  }

  private ensureCounterFileExists() {
    if (!fs.existsSync(this.counterFilePath)) {
      fs.writeFileSync(this.counterFilePath, JSON.stringify({ counter: 0 }, null, 1));
    }
  }

  private getRandomProcurementMethod(): string {
    const randomIndex = Math.floor(Math.random() * this.procurementMethods.length);
    return this.procurementMethods[randomIndex];
  }

  private getNextCounter(): number {
    let data;
  try {
    data = JSON.parse(fs.readFileSync(this.counterFilePath, 'utf8'));
  } catch (error) {
   
    if (error.code === 'ENOENT') {
      // File not found, initialize with default counter
      fs.writeFileSync(this.counterFilePath, JSON.stringify({ counter: 0 }, null, 1));
      data = { counter: 0 };
    } else {
      throw new Error('Error reading or parsing counter.json: ' + error.message);
    }
  }

  const nextCounter = data.counter + 1;
  fs.writeFileSync(this.counterFilePath, JSON.stringify({ counter: nextCounter }, null, 2));
  return nextCounter;
  }

  async createIdentification(createBudgetDto: CreateBudgetDto): Promise<Budget> {
  
    const { name } = createBudgetDto;
    const nextNumber = this.getNextCounter();

    
    const newBudget = this.budgetRepository.create({
      budgetId: this.constantBudgetID,
      budgetYearId: this.constantBudgetYearId,
      currency: faker.finance.currencyCode(),
      description: faker.lorem.sentence(),
      isMultiYear: faker.datatype.boolean(), 
      name: name,
      procurementApplication: this.getRandomProcurementMethod(), 
      remark: faker.lorem.sentence(),
      totalEstimatedAmount: parseFloat(faker.finance.amount()),
      type: this.constantType,
    });
    return this.budgetRepository.save(newBudget);
  }

  async findByName(name: string): Promise<Budget[]> {
    return this.budgetRepository.find({ where: { name } });
  }
}
