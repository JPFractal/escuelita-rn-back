import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { Language } from "./models/language.entity";
import { Level } from "./models/level.entity";
import { TalentMetadataService } from "./services/talentMetadata.service";
import { TalentMetadataController } from "./controllers/talentMetadata.controller";
import { Currency } from "./models/currency.entity";
import { Country } from "./models/country.entity";
import { City } from "./models/city.entity";
import { TechnicalProfile } from "./models/technicalProfile.entity";

const Entities = [Language, Level, Currency, Country, City, TechnicalProfile];
const Services = [TalentMetadataService];
const Controllers = [TalentMetadataController];

@Module({
  imports: [SequelizeModule.forFeature([...Entities])],
  providers: [...Services],
  exports: [...Services],
  controllers: [...Controllers],
})
export class talentMetaDataModule {}
