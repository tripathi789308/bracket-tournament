import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from 'src/modules/team/model/team.model';
import { CreateTournament, JoinTournament, UpdateTournament } from '../dto/tournament.dto';
import { Tournament } from '../model/tournament.model';

@Injectable()
export class TournamentService {
    constructor(
        @InjectModel('Tournament') private readonly tournamentrepo:Model<Tournament>,
        @InjectModel('Team') private readonly teamrepo:Model<Team>
    ){ }

    public async find(id:string):Promise<Tournament>{
        return await this.tournamentrepo.findById(id);
    }

    public async findAll():Promise<Tournament[]>{
        return await this.tournamentrepo.find();
    }

    public async create(id:string,tournamentDto:CreateTournament){
        try{
            const tournamentObject= JSON.parse(JSON.stringify(tournamentDto));
            tournamentObject.createdBy=id;
            return await this.tournamentrepo.create(tournamentObject);
        }
        catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    public async update(id:string,updatetournamentDto : UpdateTournament):Promise<any>{
        try{
            let updatedTournament : any = await this.tournamentrepo.findByIdAndUpdate(id,{...updatetournamentDto})
            return await updatedTournament;
        }catch(error){
            throw new InternalServerErrorException(error);
        }
    }

    public async join(id:string,user:string,joinTournamentDto:JoinTournament):Promise<any>{
        try{
            let team:Team = await this.teamrepo.findOne({"members":{"$in":user}});
            let tournament:Tournament=await this.tournamentrepo.findById(id);
            tournament.teams.push(team._id);
            try{
                let updatedTournament:any = await this.tournamentrepo.findByIdAndUpdate(id,{
                    ...tournament
                });
                team.tournament.push(id);
                let updatedTeam:any=await this.teamrepo.findByIdAndUpdate(team._id,{
                    ...team
                });
                return await updatedTournament;
            }catch(error){
                throw new InternalServerErrorException(error);
            }
        }

        catch(error){
            throw new InternalServerErrorException(error);
        }

    }
}
