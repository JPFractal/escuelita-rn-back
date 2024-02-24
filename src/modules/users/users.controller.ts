import { Controller, Get, Param, Request, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { RolesGuard } from "src/guards/roles.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get("/profile/:username")
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getProfile(@Param("username") username: string) {
    return await this.userService.getProfile(username);
  }
}
