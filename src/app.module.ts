import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigurationModule } from './modules/configuration/configuration.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    // OrganizationsModule,
    // TalentsModule,
    // OrganizationsTalentsModule,
    AuthModule,
    UsersModule,
  ],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
