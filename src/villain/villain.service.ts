import { Model } from 'mongoose';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVillainDto } from './create-villain.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VillainInterface } from './villain.interface';

@Injectable()
export class VillainService {
  constructor(
    @Inject('VILLAIN_MODEL')
    private readonly villainModel: Model<VillainInterface>,
  ) {}

  async getAllFromDb(): Promise<VillainInterface[]> {
    return await this.villainModel.find().exec();
  }

  async getById(id: string): Promise<VillainInterface> {
    return await this.villainModel.findById(id).exec();
  }

  async add(villainDto: CreateVillainDto): Promise<VillainInterface> {
    const newVillain = await new this.villainModel(villainDto);
    return newVillain.save();
  }

  async update(
    id: string,
    villainDto: CreateVillainDto,
  ): Promise<VillainInterface> {
    return await this.villainModel.findByIdAndUpdate(id, villainDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    const result = await this.villainModel.deleteOne({ _id: id }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find villain.');
    }
  }
}
