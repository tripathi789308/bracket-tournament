import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTeam {
   
    @ApiProperty(
        {
            description: 'Team Name',
            default: 'Black Panthers'
        }
    )
    @IsNotEmpty()
    teamName: string;

    @ApiProperty(
        {
            description: 'Created At',
            default: new Date()
        }
    )
    createdAt: Date

    @ApiProperty(
        {
            description: 'Tournaments Joined',
            default: []
        }
    )
    tournament: any[];

    @ApiProperty(
        {
            description: ' Team Members',
            default: []
        }
    )
    members: any[];
}

export class UpdateTeam{
    
    @ApiProperty(
        {
            description: 'Team Name',
            default: 'Black Panthers'
        }
    )
    @IsNotEmpty()
    teamName: string;
}

export class JoinTeam{
    @ApiProperty({
        description:"Member Name",
        default:""
    })
    members:string;
}