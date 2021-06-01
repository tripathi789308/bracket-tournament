import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTeam, JoinTeam, UpdateTeam } from '../dto/team.dto';
import { Team } from '../model/team.model';
import { TeamService } from '../service/team.service';

@Controller('team')
export class TeamController {
    constructor(
        private teamService:TeamService
    ){ }

    @Get()
    public async findAll():Promise<Team[]> {
        return await this.teamService.findAll();
    }

    @Get('/:id')
    public async find(@Param('id') id:string):Promise<Team> {
        return await this.teamService.find(id);
    }

    @Post('/:id')
    public async create(@Param('id') id : string,@Body() teamdto:CreateTeam){
        return await this.teamService.create(id,teamdto);
    }

    @Put('/:id')
    public async update(@Param('id') id : string, @Body() updateTeamDto:UpdateTeam){
        return await this.teamService.update(id,updateTeamDto);
    }

    @Put('/joinTeam/:id')
    public async join(@Param('id') id :string,@Body() joinTeamDto:JoinTeam) :Promise<any>{
        return await this.teamService.join(id,joinTeamDto)
    }

    @Get('/teamBy/:user')
    public async findBy(@Param('user') user:string):Promise<any>{
        return await this.teamService.findBy(user);
    }
}
