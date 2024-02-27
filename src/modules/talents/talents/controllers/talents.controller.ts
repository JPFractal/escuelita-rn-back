import { Controller, Get, Param, Request, UseGuards } from "@nestjs/common";

import { RolesGuard } from "src/guards/roles.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { TalentsService } from "../services/talents.service";

@Controller("talents")
export class TalentsController {
  constructor(private talentsService: TalentsService) {}

  @Get("/")
  //@UseGuards(JwtAuthGuard, RolesGuard)
  async getProfile(@Param("username") username: string) {
    return await this.talentsService.findAll();
  }
}
