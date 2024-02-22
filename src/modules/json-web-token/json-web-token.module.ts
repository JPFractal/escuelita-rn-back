import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService, ConfigType } from "@nestjs/config";
import jwtConfig from "src/config/jwt.config";
import { JwtStrategy } from "src/strategies/jwt.strategy";
import { PassportModule } from "@nestjs/passport";

@Module({
  providers: [JwtStrategy],
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory(configService: ConfigService) {
        const jwt: ConfigType<typeof jwtConfig> = configService.get("jwt");
        return {
          global: true,
          secret: jwt.jwt_secret,
          signOptions: { expiresIn: "1d" },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class JsonWebTokenModule {}
