import { Controller, Get, Param, Request, UseGuards } from "@nestjs/common";

import { RolesGuard } from "src/guards/roles.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { TalentMetadataService } from "../services/talentMetadata.service";

@Controller("metaData")
export class TalentMetadataController {
  constructor(private metadataService: TalentMetadataService) {}

  @Get("/")
  //@UseGuards(JwtAuthGuard, RolesGuard)
  async getAllLanguages() {
    return await this.metadataService.findAllLanguges();
  }
  @Get("/levels")
  //@UseGuards(JwtAuthGuard, RolesGuard)
  async getAllLevels() {
    return await this.metadataService.findAllLevels();
  }
}
