import { LanguageDto } from "src/modules/talentMetaData/dtos/language.dto";
import { LevelDto } from "src/modules/talentMetaData/dtos/level.dto";

export type RegisterOptions = {
  languages: LanguageDto[];
  languagesLevels: LevelDto[];
};
