import { HeroService } from './hero.service';
import { CreateHeroDto } from './create-hero.dto';
export declare class HeroesController {
  private readonly heroService;
  constructor(heroService: HeroService);
  retrieveHeroes(res: any): Promise<any>;
  retrieveHero(id: string): Promise<import('./hero.interface').HeroInterface>;
  saveHero(res: any, heroDto: CreateHeroDto): Promise<any>;
  updateHero(
    id: string,
    heroDto: CreateHeroDto,
  ): Promise<import('./hero.interface').HeroInterface>;
  removeHero(res: any, id: string): Promise<any>;
}
