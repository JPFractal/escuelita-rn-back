// auth/jwt-auth.guard.ts
import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class RefreshJwtGuard  extends AuthGuard("jwt-refresh") {
  // canActivate(context: ExecutionContext) {
  //   const request = context.switchToHttp().getRequest();
  //   const response = context.switchToHttp().getResponse();
  //   console.log("RefreshJwtGuard: ", super.canActivate(context));
  //   return super.canActivate(context);
  // }
}
