import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateVillainDto } from './create-villain.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VillainInterface } from './villain.interface';

@Injectable()
export class VillainService {
  constructor(
    @InjectModel('villain')
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
    // this.villainModel.deleteOne(); does not return anything.
    return await this.villainModel.findByIdAndRemove(id);
  }
}
