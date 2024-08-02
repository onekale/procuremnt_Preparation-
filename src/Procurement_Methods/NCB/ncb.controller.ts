import { Controller, Post, Body, Get, Param, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { NcbService} from './ncb.service';
import { Ncb } from './ncb.entity';
import { CreateNcbDto } from './create-ncb.dto';
import { AuthGuard } from '../../AuthGuard';

@Controller('ncb')
export class NcbController {
  constructor(private readonly ncbService: NcbService) {}

  
  @Post()
  // @UseGuards(AuthGuard)
  async create(
    @Body() createNcbDto: CreateNcbDto,
  @Req()  req: Request,
  @Res() res: Response, 
): Promise<Ncb> {
    const ncb = await this.ncbService.CreateProcurumentNCBMethod(createNcbDto);

    res.setHeader('Request-URL', req.originalUrl); 
    res.setHeader('Custom-Header', 'HeaderValue');
    res.status(HttpStatus.CREATED).json(ncb);
    return this.ncbService.CreateProcurumentNCBMethod(createNcbDto);
    
  }

}


//Request URL :  https://dev-bo.megp.peragosystems.com/infrastructure/api/rule-designers/validate/nationalCompetitiveBidding