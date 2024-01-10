import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';
import { Lugar } from './entities/lugar.entity'; // Importa la entidad Lugar

@Injectable()
export class LugaresService {
  constructor(
    @InjectRepository(Lugar)
    private lugaresRepository: Repository<Lugar>,
  ) {}

  async create(createLugarDto: CreateLugarDto): Promise<Lugar> {
    const lugar = this.lugaresRepository.create(createLugarDto);
    return this.lugaresRepository.save(lugar);
  }

  async findAll(): Promise<Lugar[]> {
    return this.lugaresRepository.find();
  }

  async findOne(id: number): Promise<Lugar> {
    return this.lugaresRepository.findOne({ where: { id: id } });
  }
  

  async update(id: number, updateLugarDto: UpdateLugarDto): Promise<Lugar> {
    await this.lugaresRepository.update(id, updateLugarDto);
    return this.lugaresRepository.findOne({ where: { id } });

  }

  async remove(id: number): Promise<void> {
  await this.lugaresRepository.delete({ id: id });
}

}
