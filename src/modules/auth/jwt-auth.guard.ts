// auth/jwt-auth.guard.ts
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    // canActivate(context: ExecutionContext): boolean {
    //     console.log(">>JwtAuthGuard!!!");
    //     return false
    // }
}
