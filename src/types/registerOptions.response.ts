import { LanguageDto } from "src/modules/talents/languages/dtos/language.dto";
import { LevelDto } from "src/modules/talents/languages/dtos/level.dto";

export type RegisterOptions = {
  languages: LanguageDto[];
  languagesLevels: LevelDto[];
};
