import { Role } from "src/types/role.enum";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "../models/languages.entity";

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel(Language)
    private languagesRepository: typeof Language,
  ) {}

  async findAll(): Promise<Language[]> {
    return this.languagesRepository.findAll<Language>();
  }
}
