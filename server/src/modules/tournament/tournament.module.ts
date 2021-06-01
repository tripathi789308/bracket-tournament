import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from '../team/model/team.model';
import { TournamentController } from './controller/tournament.controller';
import { TournamentSchema } from './model/tournament.model';
import { TournamentService } from './service/tournament.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Tournament', schema: TournamentSchema
      },
      {
        name:'Team',schema:TeamSchema
      }
    ]),
  ],
  controllers: [TournamentController],
  providers: [TournamentService]
})
export class TournamentModule {}
