import { Model } from 'mongoose';
import { CreateHeroDto } from './create-hero.dto';
import { HeroInterface } from './hero.interface';
export declare class HeroService {
    private readonly heroModel;
    constructor(heroModel: Model<HeroInterface>);
    getAllFromDb(): Promise<HeroInterface[]>;
    getById(id: string): Promise<HeroInterface>;
    add(heroDto: CreateHeroDto): Promise<HeroInterface>;
    update(id: string, heroDto: CreateHeroDto): Promise<HeroInterface>;
    remove(id: string): Promise<any>;
}
