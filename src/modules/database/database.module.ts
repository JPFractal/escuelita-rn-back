import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService, ConfigType } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import dbConfiguration from "src/config/db.configuration";

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const database: ConfigType<typeof dbConfiguration> = configService.get<ConfigType<typeof dbConfiguration>>("database");
        return {
          dialect: database.dialect,
          host: database.host,
          port: database.port,
          username: database.username,
          password: database.password,
          database: database.database,

          autoLoadModels: false,
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
