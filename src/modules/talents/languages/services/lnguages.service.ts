import { Role } from "src/types/role.enum";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "../models/languages.entity";
import { Level } from "../models/levels.entity";

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel(Language)
    private languagesRepository: typeof Language,

    @InjectModel(Level)
    private levelsRepository: typeof Level,
  ) {}

  async findAllLanguges(): Promise<Language[]> {
    return this.languagesRepository.findAll<Language>();
  }

  async findAllLevels(): Promise<Level[]> {
    return this.levelsRepository.findAll<Level>();
  }
}
