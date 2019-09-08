import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './create-hero.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HeroInterface } from './hero.interface';

@Injectable()
export class HeroService {
  constructor(
    @InjectModel('hero')
    private readonly heroModel: Model<HeroInterface>,
  ) {}

  async getAllFromDb(): Promise<HeroInterface[]> {
    return await this.heroModel.find().exec();
  }

  async getById(id: string): Promise<HeroInterface> {
    return await this.heroModel.findById(id).exec();
  }

  async add(heroDto: CreateHeroDto): Promise<HeroInterface> {
    const newHero = await new this.heroModel(heroDto);
    return newHero.save();
  }

  async update(id: string, heroDto: CreateHeroDto): Promise<HeroInterface> {
    return await this.heroModel.findByIdAndUpdate(id, heroDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    // this.heroModel.deleteOne(); does not return anything.
    return await this.heroModel.findByIdAndRemove(id);
  }
}
