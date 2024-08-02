import { IsString } from 'class-validator';

export class CreateBudgetDto {
  @IsString()
  name: string;
}
