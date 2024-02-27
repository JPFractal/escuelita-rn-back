import { Controller, Get, Param, Request, UseGuards } from "@nestjs/common";

import { RolesGuard } from "src/guards/roles.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { LanguagesService } from "../services/lnguages.service";

@Controller("languages")
export class LanguagesController {
  constructor(private languagesService: LanguagesService) {}

  @Get("/")
  //@UseGuards(JwtAuthGuard, RolesGuard)
  async getAll() {
    return await this.languagesService.findAll();
  }
}
