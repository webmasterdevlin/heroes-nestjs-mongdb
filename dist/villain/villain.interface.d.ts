import { Document } from 'mongoose';
export interface VillainInterface extends Document {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly house: string;
  readonly knownAs: string;
}
