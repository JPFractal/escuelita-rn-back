import { IsString } from "class-validator";

export class SignInDTO {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
export class RefreshDTO {
  @IsString()
  refreshToken: string;
}

export type SignInReponse = {
  accessToken: string;
  refreshToken: string;
  user: any;
};
export type JWTPayload = {
  sub: string;
  username: string;
  roles: string[];
};
