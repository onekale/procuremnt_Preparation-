import { Controller, Post, Body, Get, Param, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './create-budget.dto';
import { Budget } from './budget.entity';
import { AuthGuard } from './AuthGuard';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post('')
  // @UseGuards(AuthGuard)
  async create(
    @Body() createBudgetDto: CreateBudgetDto,
  @Req()  req: Request,
  @Res() res: Response, 
): Promise<Budget> {
    const budget = await this.budgetService.createIdentification(createBudgetDto);

    res.setHeader('Request-URL', req.originalUrl); 
    res.setHeader('Custom-Header', 'HeaderValue');
    res.status(HttpStatus.CREATED).json(budget);
    return this.budgetService.createIdentification(createBudgetDto);
    
  }


  @Get(':name')
  @UseGuards(AuthGuard)
  async findByName(@Param('name') name: string): Promise<Budget[]> {
    return this.budgetService.findByName(name);
  }
}


//  Request URL:   https://dev-bo.megp.peragosystems.com/planning/api/procurement-requisitions
