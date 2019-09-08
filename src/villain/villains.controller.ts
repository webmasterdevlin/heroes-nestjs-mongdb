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
} from '@nestjs/common';
import { VillainService } from './villain.service';
import { CreateVillainDto } from './create-villain.dto';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('villains')
@Controller('villains')
export class VillainsController {
  constructor(private readonly villainService: VillainService) {}

  @ApiOperation({ title: 'Get all villains' })
  @ApiResponse({ status: 200, description: 'Return all villain.' })
  @Get()
  async retrieveVillains(@Res() res) {
    const villains = await this.villainService.getAllFromDb();
    return res.status(HttpStatus.OK).json(villains);
  }

  @ApiOperation({ title: 'Get a villain by id' })
  @ApiResponse({ status: 200, description: 'Return a villain by id.' })
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

  @ApiOperation({ title: 'Create villain' })
  @ApiResponse({
    status: 201,
    description: 'The villain has been successfully created.',
  })
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

  @ApiOperation({ title: 'Delete villain' })
  @ApiResponse({
    status: 200,
    description: 'The villain has been successfully deleted.',
  })
  @Delete(':id')
  async removeVillain(@Res() res, @Param('id') id: string) {
    await this.villainService.remove(id);
    return res.status(HttpStatus.OK).json({
      message: 'The villain has been successfully deleted.',
    });
  }
}
