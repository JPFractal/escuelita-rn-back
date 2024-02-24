import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService, ConfigType } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";

import jwtConfig from "src/config/jwt.config";
import { JwtStrategy } from "src/strategies/jwt.strategy";
import { RefreshJwtStrategy } from "src/strategies/refresh-token.strategy";

@Module({
  providers: [JwtStrategy, RefreshJwtStrategy],
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory(configService: ConfigService) {
        const jwt: ConfigType<typeof jwtConfig> = configService.get("jwt");
        return {
          secret: jwt.jwt_secret,
          signOptions: { expiresIn: "10m" },
        };
      },
      inject: [ConfigService],
      global: true
    }),
  ],
})
export class JsonWebTokenModule {}
