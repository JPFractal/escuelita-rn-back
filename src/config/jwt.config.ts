import { registerAs } from "@nestjs/config";

const jwtConfig = registerAs("jwt", () => ({
  jwt_secret: process.env.ACCESS_TOKEN_SECRET,
  jwt_refresh: process.env.REFRESH_TOKEN_SECRET,
}));

export default jwtConfig;
