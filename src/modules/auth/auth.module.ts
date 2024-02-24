import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { JsonWebTokenModule } from "../json-web-token/json-web-token.module";

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [UsersModule, JsonWebTokenModule],
})
export class AuthModule {}
