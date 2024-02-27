import { Module } from "@nestjs/common";
import { DatabaseModule } from "./modules/database/database.module";
import { ConfigurationModule } from "./modules/configuration/configuration.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { JsonWebTokenModule } from "./modules/json-web-token/json-web-token.module";
import { TalentsModule } from "./modules/talents/talents/talents.module";
@Module({
  imports: [ConfigurationModule, DatabaseModule, UsersModule, AuthModule, TalentsModule],
  providers: [],
})
export class AppModule {}
