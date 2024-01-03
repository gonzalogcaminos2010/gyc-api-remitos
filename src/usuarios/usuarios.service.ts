import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto'; // Asegúrate de crear este DTO
import { UpdateUsuarioDto } from './dto/update-usuario.dto'; // Asegúrate de crear este DTO

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuariosRepository.create(createUsuarioDto);
    return this.usuariosRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    await this.usuariosRepository.update(id, updateUsuarioDto);
    return this.usuariosRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }

  async patch(id: number, usuarioData: Partial<Usuario>): Promise<Usuario> {
    // Primero, encontrar el usuario por ID
    const usuario = await this.usuariosRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // Actualizar los campos proporcionados
    Object.assign(usuario, usuarioData);

    // Guardar los cambios en la base de datos
    return this.usuariosRepository.save(usuario);
  }



}
