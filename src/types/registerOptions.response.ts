import { CityDto } from "src/modules/talentMetaData/dtos/city.dto";
import { CountryDto } from "src/modules/talentMetaData/dtos/country.dto";
import { CurrencyDto } from "src/modules/talentMetaData/dtos/currency.dto";
import { LanguageDto } from "src/modules/talentMetaData/dtos/language.dto";
import { LevelDto } from "src/modules/talentMetaData/dtos/level.dto";
import { TechnicalProfileDto } from "src/modules/talentMetaData/dtos/technicalProfile.dto";

export type RegisterOptions = {
  languages: LanguageDto[];
  languagesLevels: LevelDto[];
  currency: CurrencyDto[];
  countries: CountryDto[];
  cities: CityDto[];
  technicalProfiles: TechnicalProfileDto[];
};
