import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "src/config/configuration";
import dbConfiguration from "src/config/db.configuration";
import { validate } from "./env.validation";
import awsConfiguration from "src/config/aws.configuration";
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      expandVariables: true,
      load: [configuration, dbConfiguration, awsConfiguration],
      envFilePath: process.env.NODE_ENV || ".development.env",
      validate,
      isGlobal: true,
    }),
  ],
})
export class ConfigurationModule {}
