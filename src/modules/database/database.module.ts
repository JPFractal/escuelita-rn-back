import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService, ConfigType } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import dbConfiguration from "src/config/db.configuration";
import { Talent } from "../talents/talents/models/talents.entity";
import { Language } from "../talentMetaData/models/languages.entity";
import { Level } from "../talentMetaData/models/levels.entity";

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const database = configService.get<ConfigType<typeof dbConfiguration>>("database");
        return {
          dialect: database.dialect,
          host: database.host,
          port: database.port,
          username: database.username,
          password: database.password,
          database: database.database,

          autoLoadModels: false,
          synchronize: false,
          models: [Talent, Language, Level],
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
