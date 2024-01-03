import { Remito } from '../remitos/remito.entity';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  password: string; // Considera almacenar una versión hash del password
  
  @OneToMany(() => Remito, remito => remito.creador)
  remitosCreados: Remito[];

  @OneToMany(() => Remito, remito => remito.receptor)
  remitosRecibidos: Remito[];
  // Agrega cualquier otra columna que necesites
}
