// auth/jwt.strategy.ts
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService, ConfigType } from "@nestjs/config";
import jwtConfig from "src/config/jwt.config";
import { JWTPayload } from "src/modules/auth/auth.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const jwt: ConfigType<typeof jwtConfig> = configService.get("jwt");
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwt.jwt_secret,
    });
  }

  async validate(payload: JWTPayload): Promise<Omit<JWTPayload, "sub">> {
    return { username: payload.username, roles: payload.roles };
  }
}
