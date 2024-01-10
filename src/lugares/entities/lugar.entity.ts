import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Lugar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('double')
  latitud: number;

  @Column('double')
  longitud: number;
}
