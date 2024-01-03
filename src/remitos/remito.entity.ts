import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity()
export class Remito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  articulos: Record<string, number | string>;

  @Column()
  entregadoPor: string;

  @Column()
  recibidoPor: string;

  @Column()
  fechaEntrega: Date;

  @ManyToOne(() => Usuario, usuario => usuario.remitosCreados)
  creador: Usuario;

  @ManyToOne(() => Usuario, usuario => usuario.remitosRecibidos)
  receptor: Usuario;
}
