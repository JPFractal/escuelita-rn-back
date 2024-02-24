import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "../../guards/jwt-auth.guard";
import { JWTPayload, RefreshDTO, SignInDTO } from "./auth.dto";
import { RefreshJwtGuard } from "src/guards/refresh-jwt.guard";
// import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  login(@Body() signInDto: SignInDTO) {
    return this.authService.login(signInDto.username, signInDto.password);
  }
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(RefreshJwtGuard)
  @Post("refresh")
  refresh(@Request() req: Request) {
    return this.authService.refreshToken(<JWTPayload>(req as any).user);
  }
}
