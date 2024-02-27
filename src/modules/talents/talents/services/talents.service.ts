import { Role } from "src/types/role.enum";

import { Injectable } from "@nestjs/common";
import { Talent } from "../models/talents.entity";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "../../languages/models/languages.entity";

@Injectable()
export class TalentsService {
  constructor(
    @InjectModel(Talent)
    private talentsRepository: typeof Talent,

    @InjectModel(Language)
    private languagesRepository: typeof Language,
  ) {}

  async findAll(): Promise<Talent[]> {
    return this.talentsRepository.findAll<Talent>();
  }

  async getOptionsForRegister(): Promise<any> {
    const res = {};

    const languages = this.languagesRepository.findAll<Language>();
  }
}
