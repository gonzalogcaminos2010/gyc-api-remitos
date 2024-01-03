import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Remito } from './remito.entity';
import { CreateRemitoDto } from './dto/create-remito.dto';
import { UpdateRemitoDto } from './dto/update-remito.dto';

@Injectable()
export class RemitosService {
  constructor(
    @InjectRepository(Remito)
    private remitosRepository: Repository<Remito>,
  ) {}

  async findAll(): Promise<Remito[]> {
    return this.remitosRepository.find();
  }

  async findOne(id: number): Promise<Remito> {
    return this.remitosRepository.findOne({ where: { id } });
  }

  async create(createRemitoDto: CreateRemitoDto): Promise<Remito> {
    const remito = this.remitosRepository.create(createRemitoDto);
    return this.remitosRepository.save(remito);
  }

  async update(id: number, updateRemitoDto: UpdateRemitoDto): Promise<Remito> {
    await this.remitosRepository.update(id, updateRemitoDto);
    return this.remitosRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.remitosRepository.delete(id);
  }

  async findByUsuarioId(usuarioId: number): Promise<Remito[]> {
    return this.remitosRepository.find({ where: { creador: { id: usuarioId } } });
  }
}
