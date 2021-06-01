import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from 'src/modules/auth/model/auth.model';
import { CreateTeam, JoinTeam, UpdateTeam } from '../dto/team.dto';
import { Team } from '../model/team.model';

@Injectable()
export class TeamService {
    constructor(
    @InjectModel('Team') private readonly teamRepo: Model<Team>
    ){ }

    public async findAll():Promise<Team[]>{
        return await this.teamRepo.find();
    }

    public async find(id:string):Promise<Team>{
        return await this.teamRepo.findById(id);
    }

    public async create(id:string,teamDto:CreateTeam){
        try{
            const teamObject=JSON.parse(JSON.stringify(teamDto));
            teamObject.createdBy=id;
            teamObject.members.push(id);
            return await this.teamRepo.create(teamObject);
        }catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    public async update(id:string,teamDto:UpdateTeam):Promise<any>{
        try{
            let updatedTeam: any = await this.teamRepo.findByIdAndUpdate(id, {
                ...teamDto
            });
            return await updatedTeam;
        }catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    public async join(id:string,joinTeamDto:JoinTeam):Promise<any>{
        let updatedTeam :any =await this.teamRepo.findById(id);
        updatedTeam.members.push(joinTeamDto.members);

        try{
            let updatedTeamMember: any = await this.teamRepo.findByIdAndUpdate(id, {
                ...updatedTeam
            });
            return await updatedTeamMember;
        }catch (error) {
            throw new InternalServerErrorException(error);
        }

    }
    public async findBy(user:string):Promise<any>{
        try{
            let team : Team = await this.teamRepo.findOne({"members":{"$in":user}});
            return await team;
        }

        catch (error) {
            throw new InternalServerErrorException(error);
        }
    }


}
