import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Delete,
  Param,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { VillainService } from './villain.service';
import { CreateVillainDto } from './create-villain.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('villains')
@Controller('villains')
export class VillainsController {
  constructor(private readonly villainService: VillainService) {}

  @Get()
  async retrieveVillains(@Res() res) {
    const villains = await this.villainService.getAllFromDb();
    return res.status(HttpStatus.OK).json(villains);
  }

  @Get(':id')
  async retrieveVillain(@Param('id') id: string) {
    const villain = await this.villainService.getById(id);
    if (villain) {
      return villain;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Item Not Found',
        },
        404,
      );
    }
  }

  @Post()
  async saveVillain(@Res() res, @Body() villainDto: CreateVillainDto) {
    const createdVillain = await this.villainService.add(villainDto);
    return res.status(HttpStatus.OK).json({
      message: 'Villain has been created successfully',
      createdVillain,
    });
  }

  @Put(':id')
  async updateVillain(
    @Param('id') id: string,
    @Body() villainDto: CreateVillainDto,
  ) {
    return await this.villainService.update(id, villainDto);
  }

  @Delete(':id')
  async removeVillain(@Res() res, @Param('id') id: string) {
    const deletedVillain = await this.villainService.remove(id);
    if (!deletedVillain) {
      throw new NotFoundException('Villain does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Villain has been deleted',
      deletedVillain,
    });
  }
}
