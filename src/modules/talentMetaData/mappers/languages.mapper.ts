import { LanguageDto } from "../dtos/language.dto";
import { LevelDto } from "../dtos/level.dto";
import { Language } from "../models/languages.entity";
import { Level } from "../models/levels.entity";

export const mapLanguageToDto = (language: Language): LanguageDto => ({
  id: language.ID_IDIOMA,
  name: language.NO_IDIOMA,
});

export const mapLevelToDto = (level: Level): LevelDto => ({
  id: level.ID_NIVEL_IDIOMA,
  name: level.NO_NIVEL,
});
