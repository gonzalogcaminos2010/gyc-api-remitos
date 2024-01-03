import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { RemitosService } from './remitos.service';
import { CreateRemitoDto } from './dto/create-remito.dto'; // Asegúrate de importar los DTOs
import { UpdateRemitoDto } from './dto/update-remito.dto';
import { Remito } from './remito.entity'; // Asegúrate de que la ruta sea correcta

@Controller('remitos')
export class RemitosController {
  constructor(private readonly remitosService: RemitosService) {}

  @Get()
  async findAll(): Promise<Remito[]> {
    return await this.remitosService.findAll();
  }

  @Get('usuario/:usuarioId')
  findByUsuarioId(@Param('usuarioId') usuarioId: number) {
    return this.remitosService.findByUsuarioId(usuarioId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Remito> {
    return await this.remitosService.findOne(id);
  }

  @Post()
  async create(@Body() createRemitoDto: CreateRemitoDto): Promise<Remito> {
    return await this.remitosService.create(createRemitoDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateRemitoDto: UpdateRemitoDto): Promise<Remito> {
    return await this.remitosService.update(id, updateRemitoDto);
  }

  @Patch(':id')
  async patch(@Param('id') id: number, @Body() updateRemitoDto: UpdateRemitoDto): Promise<Remito> {
    return await this.remitosService.update(id, updateRemitoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.remitosService.delete(id);
  }
}
