import { CreatePlatoDto } from './dto/create-plato.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PLATO } from 'src/common/models/models';
import { IPlato } from 'src/common/interfaces/plato.interface';

@Injectable()
export class PlatoService {
  constructor(@InjectModel(PLATO.name) private readonly model: Model<IPlato>) {}

  
  async create(createPlatoDTO: CreatePlatoDto): Promise<IPlato> {
    const newPlato = new this.model(createPlatoDTO);
    return await newPlato.save();
  }

  async findAll(): Promise<IPlato[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IPlato> {
    return await this.model.findById(id);
  }

  async update(id: string, createPlatoDTO: CreatePlatoDto): Promise<IPlato> {
    return await this.model.findByIdAndUpdate(id, createPlatoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}