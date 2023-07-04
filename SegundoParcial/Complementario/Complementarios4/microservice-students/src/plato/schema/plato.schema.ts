import * as mongoose from 'mongoose';

export const PlatoSchema = new mongoose.Schema(
    {
      Nombre: { type: String, required: true },
     
    },
    { timestamps: true },
  );