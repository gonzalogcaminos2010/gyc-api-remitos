// src/auth/jwt-auth.guard.ts
import { AuthGuard } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        if (err || !user) {
            // Aquí puedes personalizar el mensaje de error
            throw err || new UnauthorizedException('No estás autorizado o tu sesión ha expirado. Por favor, inicia sesión de nuevo.');
        }
        return user;
    }
}
