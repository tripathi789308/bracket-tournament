import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Module } from 'module';
import { CreateAuth, LoginDTO, updateAuth } from '../dto/auth.dto';
import { Auth } from '../model/auth.model';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Get('/:id')
    public async findAll(@Param('id') id : string ):Promise<Auth>{
        return await this.authService.findAll(id);
    }
    @Get()
    public async find():Promise<Auth[]>{
        return await this.authService.find();
    }


    @Post('/register')
    async create(@Body() authDto : CreateAuth) {
        return await this.authService.create(authDto);
    }

    @Post('/login')
    async login(@Body() credential: LoginDTO): Promise<any> {
        return await this.authService.login(credential);
    }

    @Put('/:id')
    public async update(@Param('id') id:string,@Body() updateAuthDto:updateAuth):Promise<any>{
        return await this.authService.update(id,updateAuthDto);
    }
}