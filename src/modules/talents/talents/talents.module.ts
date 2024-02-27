import { Module } from "@nestjs/common";
import { TalentsController } from "./controllers/talents.controller";
import { TalentsService } from "./services/talents.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Talent } from "./models/talents.entity";
import { Language } from "../languages/models/languages.entity";
import { LanguagesService } from "../languages/services/lnguages.service";
import { LanguagesController } from "../languages/controllers/languages.controller";
import { Level } from "../languages/models/levels.entity";

const Entities = [Talent, Language, Level];
const Services = [TalentsService, LanguagesService];
const Controllers = [TalentsController, LanguagesController];

@Module({
  imports: [SequelizeModule.forFeature([...Entities])],
  providers: [...Services],
  exports: [...Services],
  controllers: [...Controllers],
})
export class TalentsModule {}
