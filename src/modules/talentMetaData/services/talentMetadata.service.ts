import { Role } from "src/types/role.enum";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Language } from "../models/language.entity";
import { Level } from "../models/level.entity";
import { RegisterOptions } from "src/types/registerOptions.response";
import { mapLanguageToDto, mapLevelToDto } from "../mappers/languages.mapper";
import { LanguageDto } from "../dtos/language.dto";
import { LevelDto } from "../dtos/level.dto";
import { Currency } from "../models/currency.entity";
import { mapCurrencyToDto } from "../mappers/currency.mapper";
import { CurrencyDto } from "../dtos/currency.dto";
import { Country } from "../models/country.entity";
import { City } from "../models/city.entity";
import { CountryDto } from "../dtos/country.dto";
import { mapCountryToDto } from "../mappers/country.mapper";
import { mapCityToDto } from "../mappers/city.mapper";
import { CityDto } from "../dtos/city.dto";
import { TechnicalProfile } from "../models/technicalProfile.entity";
import { mapTechnicalProfileToDto } from "../mappers/technicalProfile.mapper";
import { TechnicalProfileDto } from "../dtos/technicalProfile.dto";

@Injectable()
export class TalentMetadataService {
  constructor(
    @InjectModel(Language)
    private languagesRepository: typeof Language,

    @InjectModel(Level)
    private levelsRepository: typeof Level,

    @InjectModel(Currency)
    private currenciesRepository: typeof Currency,

    @InjectModel(Country)
    private countriesRepository: typeof Country,

    @InjectModel(City)
    private citiesRepository: typeof City,

    @InjectModel(TechnicalProfile)
    private technicalProfileRepository: typeof TechnicalProfile,
  ) {}

  async findAllLanguges(): Promise<Language[]> {
    return this.languagesRepository.findAll<Language>();
  }

  async findAllLevels(): Promise<Level[]> {
    return this.levelsRepository.findAll<Level>();
  }

  async getOptionsForRegister(): Promise<RegisterOptions> {
    const languagesPromise = this.languagesRepository.findAll<Language>();
    const languagesLevelsPromise = this.levelsRepository.findAll<Level>();
    const currencyPromise = this.currenciesRepository.findAll<Currency>();
    const countriesPromise = this.countriesRepository.findAll<Country>();
    const citiesPromise = this.citiesRepository.findAll<City>();
    const technicalProfilePromise = this.technicalProfileRepository.findAll<TechnicalProfile>();

    const [languages, languagesLevels, currency, countries, cities, technicalProfiles] = await Promise.all([
      languagesPromise,
      languagesLevelsPromise,
      currencyPromise,
      countriesPromise,
      citiesPromise,
      technicalProfilePromise,
    ]);

    const languagesMapped: LanguageDto[] = languages.map(mapLanguageToDto);
    const levelsMapped: LevelDto[] = languagesLevels.map(mapLevelToDto);
    const currencyMapped: CurrencyDto[] = currency.map(mapCurrencyToDto);
    const countriesMapped: CountryDto[] = countries.map(mapCountryToDto);
    const citiesMapped: CityDto[] = cities.map(mapCityToDto);
    const technicalProfilesMapped: TechnicalProfileDto[] = technicalProfiles.map(mapTechnicalProfileToDto);

    const response: RegisterOptions = {
      languages: languagesMapped,
      languagesLevels: levelsMapped,
      currency: currencyMapped,
      countries: countriesMapped,
      cities: citiesMapped,
      technicalProfiles: technicalProfilesMapped,
    };

    return response;
  }
}
