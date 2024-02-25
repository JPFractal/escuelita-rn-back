import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { JWTPayload, SignInReponse } from "./auth.dto";
import { ConfigType } from "@nestjs/config";
import jwtConfig from "src/config/jwt.config";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject(jwtConfig.KEY) private jwt: ConfigType<typeof jwtConfig>,
  ) {}

  async login(username: string, pass: string): Promise<SignInReponse> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload: JWTPayload = {
      sub: user.userId + "",
      username: user.username,
      roles: user.roles,
    };
    return {
      accessToken: await this.generateAcessToken(payload),
      refreshToken: await this.generateRefreshToken(payload),
      user: {
        name: user.firstName + " " + user.lastName,
        role: user.roles[0],
      },
    };
  }

  async refreshToken(payload: JWTPayload) {
    try {
      return {
        accessToken: await this.generateAcessToken(payload),
      };
    } catch (error) {
      console.log("AuthService refreshToken: ", error);
      throw error;
    }
  }

  async generateAcessToken(payload: JWTPayload) {
    return await this.jwtService.signAsync(payload);
  }
  async generateRefreshToken(payload: JWTPayload) {
    return this.jwtService.signAsync(payload, {
      expiresIn: "1h",
      secret: this.jwt.jwt_refresh,
    });
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
