import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTournament, JoinTournament, UpdateTournament } from '../dto/tournament.dto';
import { Tournament } from '../model/tournament.model';
import { TournamentService } from '../service/tournament.service';

@Controller('tournament')
export class TournamentController {
    constructor(
        private tournamentService:TournamentService
    ){ }

    @Get('/:id')
    public async find(@Param('id') id : string):Promise<Tournament>{
        return await this.tournamentService.find(id);
    }

    @Get()
    public async findAll():Promise<Tournament[]>{
        return await this.tournamentService.findAll();
    }

    @Post('/:id')
    public async create(@Param('id') id:string ,@Body() tournamentDto : CreateTournament){
        return await this.tournamentService.create(id,tournamentDto);
    }

    @Put('/:id')
    public async update(@Param('id') id : string,@Body() updatetournamentDto: UpdateTournament){
        return await this.tournamentService.update(id,updatetournamentDto);
    }

    @Put(':id/joinTournament/:user')
    public async join(@Param('id') id : string,@Param('user') user:string,@Body() joinTournamentDto:JoinTournament) :Promise<any>{
        return await this.tournamentService.join(id,user,joinTournamentDto);
    }

}
