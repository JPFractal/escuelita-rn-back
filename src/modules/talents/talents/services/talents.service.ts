import { Role } from "src/types/role.enum";

import { Injectable } from "@nestjs/common";
import { Talent } from "../models/talents.entity";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "../../languages/models/languages.entity";
import { Level } from "../../languages/models/levels.entity";
import { LanguageDto } from "../../languages/dtos/language.dto";
import { LevelDto } from "../../languages/dtos/level.dto";
import { mapLanguageToDto, mapLevelToDto } from "../../languages/mappers/languages.mapper";
import { RegisterOptions } from "src/types/registerOptions.response";
import { TalentDTO } from "../dtos/talent.dto";
import { mapTalentToDto, mapTalentToEntity } from "../mappers/talents.mapper";

@Injectable()
export class TalentsService {
  constructor(
    @InjectModel(Talent)
    private talentsRepository: typeof Talent,

    @InjectModel(Language)
    private languagesRepository: typeof Language,

    @InjectModel(Level)
    private levelsRepository: typeof Level,
  ) {}

  async findAll(): Promise<Talent[]> {
    return this.talentsRepository.findAll<Talent>();
  }

  async getOptionsForRegister(): Promise<RegisterOptions> {
    const _languages = this.languagesRepository.findAll<Language>();
    const _languagesLevels = this.levelsRepository.findAll<Level>();

    const [languages, languagesLevels] = await Promise.all([_languages, _languagesLevels]);

    const languagesMapped: LanguageDto[] = languages.map(mapLanguageToDto);
    const levelsMapped: LevelDto[] = languagesLevels.map(mapLevelToDto);

    const response: RegisterOptions = {
      languages: languagesMapped,
      languagesLevels: levelsMapped,
    };

    return response;
  }

  async registerTalent(talent: TalentDTO): Promise<any> {
    const newTalent = mapTalentToEntity(talent);

    const talentRegistered = await newTalent.save();

    const response: TalentDTO = mapTalentToDto(talentRegistered);

    return response;
  }
}
