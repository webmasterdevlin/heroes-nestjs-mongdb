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
import { HeroService } from './hero.service';
import { CreateHeroDto } from './create-hero.dto';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('heroes')
@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroService: HeroService) {}

  @ApiOperation({ title: 'Get all heroes' })
  @ApiResponse({ status: 200, description: 'Return all heroes.' })
  @Get()
  async retrieveHeroes(@Res() res) {
    const heroes = await this.heroService.getAllFromDb();
    return res.status(HttpStatus.OK).json(heroes);
  }

  @ApiOperation({ title: 'Get a hero by id' })
  @ApiResponse({ status: 200, description: 'Return a hero by id.' })
  @Get(':id')
  async retrieveHero(@Param('id') id: string) {
    const hero = await this.heroService.getById(id);
    if (hero) {
      return hero;
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

  @ApiOperation({ title: 'Create hero' })
  @ApiResponse({
    status: 201,
    description: 'The hero has been successfully created.',
  })
  @Post()
  async saveHero(@Res() res, @Body() heroDto: CreateHeroDto) {
    const createdHero = await this.heroService.add(heroDto);
    return res.status(HttpStatus.OK).json({
      message: 'Hero has been created successfully',
      createdHero,
    });
  }

  @ApiOperation({ title: 'Update hero' })
  @ApiResponse({
    status: 200,
    description: 'The hero has been successfully updated.',
  })
  @Put(':id')
  async updateHero(@Param('id') id: string, @Body() heroDto: CreateHeroDto) {
    return await this.heroService.update(id, heroDto);
  }

  @ApiOperation({ title: 'Delete hero' })
  @ApiResponse({
    status: 200,
    description: 'The hero has been successfully deleted.',
  })
  @Delete(':id')
  async removeHero(@Res() res, @Param('id') id: string) {
    await this.heroService.remove(id);
    return res.status(HttpStatus.OK).json({
      message: 'The hero has been successfully deleted.',
    });
  }
}
