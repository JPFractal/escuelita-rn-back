import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { Language } from "./models/languages.entity";
import { Level } from "./models/levels.entity";
import { TalentMetadataService } from "./services/talentMetadata.service";
import { TalentMetadataController } from "./controllers/talentMetadata.controller";

const Entities = [Language, Level];
const Services = [TalentMetadataService];
const Controllers = [TalentMetadataController];

@Module({
  imports: [SequelizeModule.forFeature([...Entities])],
  providers: [...Services],
  exports: [...Services],
  controllers: [...Controllers],
})
export class talentMetaData {}
