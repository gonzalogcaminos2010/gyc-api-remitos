import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RemitosModule } from './remitos/remitos.module';
import { Remito } from './remitos/remito.entity';
import { Usuario } from './usuarios/usuario.entity'; // Importa la entidad Usuario
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { LugaresModule } from './lugares/lugares.module';
import { Lugar } from './lugares/entities/lugar.entity';


@Module({
  imports: [
    RemitosModule,
    UsuariosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gyc-remitos',
      entities: [Remito, Usuario, Lugar],
      synchronize: true,
    }),
    AuthModule,
    LugaresModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
