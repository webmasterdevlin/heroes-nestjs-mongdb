import { VillainService } from './villain.service';
import { CreateVillainDto } from './create-villain.dto';
export declare class VillainsController {
  private readonly villainService;
  constructor(villainService: VillainService);
  retrieveVillains(res: any): Promise<any>;
  retrieveVillain(
    id: string,
  ): Promise<import('./villain.interface').VillainInterface>;
  saveVillain(res: any, villainDto: CreateVillainDto): Promise<any>;
  updateVillain(
    id: string,
    villainDto: CreateVillainDto,
  ): Promise<import('./villain.interface').VillainInterface>;
  removeVillain(res: any, id: string): Promise<any>;
}
