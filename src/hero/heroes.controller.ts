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
import { HeroService } from './hero.service';
import { CreateHeroDto } from './create-hero.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('heroes')
@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  async retrieveHeroes(@Res() res) {
    const heroes = await this.heroService.getAllFromDb();
    return res.status(HttpStatus.OK).json(heroes);
  }

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

  @Post()
  async saveHero(@Res() res, @Body() heroDto: CreateHeroDto) {
    const createdHero = await this.heroService.add(heroDto);
    return res.status(HttpStatus.OK).json({
      message: 'Hero has been created successfully',
      createdHero,
    });
  }

  @Put(':id')
  async updateHero(@Param('id') id: string, @Body() heroDto: CreateHeroDto) {
    return await this.heroService.update(id, heroDto);
  }

  @Delete(':id')
  async removeHero(@Res() res, @Param('id') id: string) {
    const deletedHero = await this.heroService.remove(id);
    if (!deletedHero) {
      throw new NotFoundException('Hero does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Hero has been deleted',
      deletedHero,
    });
  }
}
