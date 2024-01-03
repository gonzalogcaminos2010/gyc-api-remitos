import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RemitosService } from './remitos.service';
import { RemitosController } from './remitos.controller';
import { Remito } from './remito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Remito])],
  providers: [RemitosService],
  controllers: [RemitosController],
})
export class RemitosModule {}
