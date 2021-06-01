import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAuth {
    
    @ApiProperty(
        {
            description: 'First Name',
            default: 'Shivam'
        }
    )
    @IsNotEmpty()
    firstName: string;

    @ApiProperty(
        {
            description: 'Last Name',
            default: 'Tiwari'
        }
    )
    @IsNotEmpty()
    lastName: string;

    @ApiProperty(
        {
            description: 'Country',
            default: 'India'
        }
    )
    @IsNotEmpty()
    country: string;

    @ApiProperty(
        {
            description: 'email',
            default: 'abc@gmail.com'
        }
    )
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty(
        {
            description: 'Password',
            default: 'password'
        }
    )
    @IsNotEmpty()
    password: string;
}

export class updateAuth{
    @ApiProperty(
        {
            description: 'First Name',
            default: 'Shivam'
        }
    )
    @IsNotEmpty()
    firstName: string;

    @ApiProperty(
        {
            description: 'Last Name',
            default: 'Tiwari'
        }
    )
    @IsNotEmpty()
    lastName: string;
}

export class LoginDTO {
    @ApiProperty(
        {
            description: 'Email id',
            default: 'abc@gmail.com'
        }
    )
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty(
        {
            description: 'Password',
            default: 'password'
        }
    )
    @IsString()
    @MinLength(5)
    password: string;
}

