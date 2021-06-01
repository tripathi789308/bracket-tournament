import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTournament {
    @ApiProperty(
        {
            description: 'Tournament Name',
            default: 'Pubg'
        }
    )
    @IsNotEmpty()
    tournamentName: string;

    @ApiProperty(
        {
            description: 'Created By',
            default: '*'
        }
    )
    @IsNotEmpty()
    createdBy: string;

    @ApiProperty(
        {
            description: 'About Tournament',
            default: 'It is a battleground for bracket type tournament'
        }
    )
    @IsNotEmpty()
    about: string;

    @ApiProperty(
        {
            description: 'Team Names',
            default: []
        }
    )
    @IsNotEmpty()
    teams: any[];

    @ApiProperty(
        {
            description: 'Tournament Rules',
            default: ["Rule 1","Rule 2"]
        }
    )
    @IsNotEmpty()
    rules: string[];
}


export class UpdateTournament {
    @ApiProperty(
        {
            description: 'Tournament Name',
            default: 'black ops'
        }
    )
    @IsNotEmpty()
    tournamentName: string;

    @ApiProperty(
        {
            description: 'About Tournament',
            default: 'It is a battleground game for bracket type tournament'
        }
    )
    @IsNotEmpty()
    about: string;
    
    @ApiProperty(
        {
            description: 'Tournament Rules',
            default: ["Rule 4","Rule 2"]
        }
    )
    @IsNotEmpty()
    rules: string[];
}

export class JoinTournament{
    @ApiProperty(
        {
            description: 'Team Member',
            default: ''
        }
    )
    member: string;
}
