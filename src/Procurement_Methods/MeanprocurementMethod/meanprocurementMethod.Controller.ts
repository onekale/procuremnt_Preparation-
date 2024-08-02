import { Controller, Post, Get, Body, Param, HttpStatus, Res, Req, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProcurementService } from './MeanprocurementMethod.service';
import { MeanProcurement } from './meanprocurementMethod.entity';

@Controller('procurement')
export class ProcurementController {
  constructor(private readonly procurementService: ProcurementService) {}

  @Post()
  async create(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const procurement = await this.procurementService.createProcurement();
      res.status(HttpStatus.CREATED).json(procurement);
    } catch (error) {
      throw new HttpException('Unable to create procurement', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}


//Request URL:   https://dev-bo.megp.peragosystems.com/planning/api/procurement-mechanisms



















// // {
//   "contract": {},
//   "donor": [],
//   "fundingSource": "Internal Revenue",
//   "isOnline": true,
//   "justification": [
//     { "key": "procurementMethod", "status": "fail" },
//     { "key": "targetGroup", "status": "pass" }
//   ],
//   "procurementMethod": "National Competitive Bidding (NCB)",
//   "procurementRequisitionId": "9aaeca7c-50fc-4599-8ba6-6174f6aa90de",
//   "procurementType": "Consultancy Services",
//   "targetGroup": ["Others"]
// }

