// remitos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remito } from './remito.entity';

import { RemitosService } from './remitos.service';
import { RemitosController } from './remitos.controller';
import { Lugar } from 'src/lugares/entities/lugar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Remito, Lugar])], // Añade Lugar aquí
  providers: [RemitosService],
  controllers: [RemitosController],
})
export class RemitosModule {}
