import { Controller, Post, Body, Get, Param, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ReasonsService} from './reasons.service';
import { Reasons } from './reasons.entity';
import { CreateReasonsDto } from './create-reasons.dto';
import { AuthGuard } from '../../AuthGuard';

@Controller('ncb')
export class ReasonsController {
  constructor(private readonly reasonsService: ReasonsService) {}

  
  @Post()
  // @UseGuards(AuthGuard)
  async create(
    @Body() createReasonsDto: CreateReasonsDto,
  @Req()  req: Request,
  @Res() res: Response, 
): Promise<Reasons> {
    const ncb = await this.reasonsService.CreateProcurumentReasonsMethod(createReasonsDto);

    res.setHeader('Request-URL', req.originalUrl); 
    res.setHeader('Custom-Header', 'HeaderValue');
    res.status(HttpStatus.CREATED).json(ncb);
    return this.reasonsService.CreateProcurumentReasonsMethod(createReasonsDto);
    
  }
}


//Request URL :  https://dev-bo.megp.peragosystems.com/planning/api/reasons