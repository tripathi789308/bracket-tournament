import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { AuthSchema } from '../auth/model/auth.model';
import { TeamController } from './controller/team.controller';
import { TeamSchema } from './model/team.model';
import { TeamService } from './service/team.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Team', schema: TeamSchema
      },
      {
        name:'Auth',schema:AuthSchema
      }
    ])
  ],
  controllers: [TeamController],
  providers: [TeamService]
})
export class TeamModule {}
