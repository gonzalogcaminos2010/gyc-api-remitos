import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Lugar } from 'src/lugares/entities/lugar.entity';

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

  @ManyToOne(() => Lugar)
  origen: Lugar;

  @ManyToOne(() => Lugar)
  destino: Lugar;

  @ManyToOne(() => Usuario, usuario => usuario.remitosCreados)
  creador: Usuario;

  @ManyToOne(() => Usuario, usuario => usuario.remitosRecibidos)
  receptor: Usuario;
}
