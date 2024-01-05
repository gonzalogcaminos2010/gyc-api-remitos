import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';
import { LoginDto } from './dto/login.dto'; // Asegúrate de tener este DTO para el login

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUsuarioDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  // Aquí puedes agregar otros métodos relacionados con la autenticación si es necesario
}
