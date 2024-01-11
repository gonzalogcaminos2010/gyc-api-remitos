import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Remito } from './remito.entity';

import { CreateRemitoDto } from './dto/create-remito.dto';
import { UpdateRemitoDto } from './dto/update-remito.dto';
import { Lugar } from 'src/lugares/entities/lugar.entity';

@Injectable()
export class RemitosService {
  constructor(
    @InjectRepository(Remito)
    private remitosRepository: Repository<Remito>,
    @InjectRepository(Lugar)
    private lugarRepository: Repository<Lugar>,
  ) {}

  async findAll(): Promise<Remito[]> {
    return this.remitosRepository.find({ relations: ['origen', 'destino'] });
  }

  async findOne(id: number): Promise<Remito> {
    const remito = await this.remitosRepository.findOne({ where: { id }, relations: ['origen', 'destino'] });
    if (!remito) {
      throw new NotFoundException(`Remito with ID ${id} not found`);
    }
    return remito;
  }

  async create(createRemitoDto: CreateRemitoDto): Promise<Remito> {
    const origen = await this.lugarRepository.findOne({ where: { id: createRemitoDto.origenId } });
    const destino = await this.lugarRepository.findOne({ where: { id: createRemitoDto.destinoId } });

    if (!origen || !destino) {
      throw new NotFoundException('Origen or destino not found');
    }

    const remito = this.remitosRepository.create({
      ...createRemitoDto,
      origen,
      destino,
    });

    return this.remitosRepository.save(remito);
  }

  async update(id: number, updateRemitoDto: UpdateRemitoDto): Promise<Remito> {
    const remito = await this.remitosRepository.preload({
      id: id,
      ...updateRemitoDto,
    });

    if (!remito) {
      throw new NotFoundException(`Remito with ID ${id} not found`);
    }

    if (updateRemitoDto.origenId) {
      const origen = await this.lugarRepository.findOne({ where: { id: updateRemitoDto.origenId } });
      if (!origen) {
        throw new NotFoundException(`Origen with ID ${updateRemitoDto.origenId} not found`);
      }
      remito.origen = origen;
    }

    if (updateRemitoDto.destinoId) {
      const destino = await this.lugarRepository.findOne({ where: { id: updateRemitoDto.destinoId } });
      if (!destino) {
        throw new NotFoundException(`Destino with ID ${updateRemitoDto.destinoId} not found`);
      }
      remito.destino = destino;
    }

    return this.remitosRepository.save(remito);
  }

  async delete(id: number): Promise<void> {
    const result = await this.remitosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Remito with ID ${id} not found`);
    }
  }

  // Cualquier otro método que necesites
}
