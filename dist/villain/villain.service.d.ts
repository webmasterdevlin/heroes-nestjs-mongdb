import { Model } from 'mongoose';
import { CreateVillainDto } from './create-villain.dto';
import { VillainInterface } from './villain.interface';
export declare class VillainService {
  private readonly villainModel;
  constructor(villainModel: Model<VillainInterface>);
  getAllFromDb(): Promise<VillainInterface[]>;
  getById(id: string): Promise<VillainInterface>;
  add(villainDto: CreateVillainDto): Promise<VillainInterface>;
  update(id: string, villainDto: CreateVillainDto): Promise<VillainInterface>;
  remove(id: string): Promise<any>;
}
