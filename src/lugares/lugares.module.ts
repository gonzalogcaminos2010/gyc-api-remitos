import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';

import { Lugar } from './entities/lugar.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Lugar])],
  controllers: [LugaresController],
  providers: [LugaresService],
  exports: [LugaresService]
})
export class LugaresModule {}

