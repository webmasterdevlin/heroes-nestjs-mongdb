import * as mongoose from 'mongoose';

export const VillainSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  house: { type: String, required: true },
  knownAs: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});
