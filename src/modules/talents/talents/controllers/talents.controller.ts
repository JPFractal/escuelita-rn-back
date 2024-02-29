import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { RolesGuard } from "src/guards/roles.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { TalentsService } from "../services/talents.service";
import { RegisterTalentDTO } from "../dtos/talent.dto";

@Controller("talents")
export class TalentsController {
  constructor(private talentsService: TalentsService) {}

  @Get("/")
  //@UseGuards(JwtAuthGuard, RolesGuard)
  async getAll() {
    return await this.talentsService.findAll();
  }

  @Post("/register")
  //@UseGuards(JwtAuthGuard, RolesGuard)
  async register(@Body() talent: RegisterTalentDTO) {
    /*const mockupPayload: TalentDTO = {
      firstName: "John",
      paternalSurname: "Doe",
      maternalSurname: "Smith",
      imageUrl: "http://example.com/image.jpg",
      description: "Software Developer",
      talentProfileId: 2,
      currencyTypeId: 1,
      initialAmount: 5000,
      finalAmount: 10000,
      cellphone: "123-456-7890",
      linkedinUrl: "http://linkedin.com/in/johndoe",
      githubUrl: "http://github.com/johndoe",
      countryId: 1,
      cityId: 1,
      createdAt: new Date(),
    };*/

    return await this.talentsService.registerTalent(talent);
  }
}
