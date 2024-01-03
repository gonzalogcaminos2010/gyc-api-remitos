import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() usuarioData: Usuario) {
    return this.usuariosService.create(usuarioData);
  }

  // Otros métodos para GET, PUT, DELETE...
  @Get()
findAll() {
  return this.usuariosService.findAll();
}

@Get(':id')
findOne(@Param('id') id: number) {
  return this.usuariosService.findOne(id);
}
@Put(':id')
update(@Param('id') id: number, @Body() usuarioData: Usuario) {
  return this.usuariosService.update(id, usuarioData);
}
@Delete(':id')
remove(@Param('id') id: number) {
  return this.usuariosService.remove(id);
}
@Patch(':id')
patch(@Param('id') id: number, @Body() usuarioData: Partial<Usuario>) {
  return this.usuariosService.patch(id, usuarioData);
}


}
