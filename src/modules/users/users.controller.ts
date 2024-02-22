import { Controller, Get, Param, Request, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { RolesGuard } from "src/guards/roles.guard";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get("/profile")
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getProfile(@Request() req: Request) {
    return await this.userService.getProfile((req as any).user.username);
  }
}
