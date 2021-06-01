import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './modules/auth/auth.module';
import { TeamModule } from './modules/team/team.module';
import { TournamentModule } from './modules/tournament/tournament.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),AuthModule,
  MongooseModule.forRoot(
    `mongodb://localhost:27017/bracket?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  ),
  TeamModule,
  TournamentModule]
  ,
  controllers: [],
  providers: [],
})
export class AppModule {}
