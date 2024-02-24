import { Injectable } from "@nestjs/common";
import { ConfigService, ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import jwtConfig from "src/config/jwt.config";
import { JWTPayload } from "src/modules/auth/auth.dto";

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy, "jwt-refresh") {
  constructor(configService: ConfigService) {
    const jwt: ConfigType<typeof jwtConfig> = configService.get("jwt");
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest: ExtractJwt.fromBodyField('refresh'),
      ignoreExpiration: false,
      secretOrKey: jwt.jwt_refresh,
    });
  }

  async validate(payload: any): Promise<JWTPayload> {
    return { username: payload.username, roles: payload.roles, sub: payload.username };
  }
}
