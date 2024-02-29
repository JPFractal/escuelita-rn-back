import { Module } from "@nestjs/common";
import { TalentsController } from "./controllers/talents.controller";
import { TalentsService } from "./services/talents.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Talent } from "./models/talents.entity";

const Entities = [Talent];
const Services = [TalentsService];
const Controllers = [TalentsController];

@Module({
  imports: [SequelizeModule.forFeature([...Entities])],
  providers: [...Services],
  exports: [...Services],
  controllers: [...Controllers],
})
export class TalentsModule {}
