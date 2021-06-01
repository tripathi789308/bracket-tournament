import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { compareSync} from 'bcrypt'
import { CreateAuth, LoginDTO, updateAuth } from '../dto/auth.dto';
import { Auth } from '../model/auth.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('Auth') private readonly authRepo: Model<Auth>,
        @InjectModel('Auth') private readonly updateRepo : Model<Auth>
    ) { }

    public async findAll(id : string): Promise<Auth> {
        return await this.authRepo.findById(id);
    }
    public async find(): Promise<Auth[]> {
        return await this.authRepo.find();
    }

    public async create(authDto: CreateAuth){
        try{
            const authObject=JSON.parse(JSON.stringify(authDto));
            console.log(authObject);
            return await this.authRepo.create(authObject);
        }catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    public async login(loginDto:LoginDTO):Promise<any>{
        const user: Auth = await this.authRepo.findOne({ email: loginDto.email });
        const checkPassword = user && await compareSync(loginDto.password, user.password);
        if (user && checkPassword) {
            const foundUserDetail = await JSON.parse(JSON.stringify(user));
            foundUserDetail.token=true;
            return await this.updateRepo.findByIdAndUpdate(foundUserDetail);
        } else {
            throw new InternalServerErrorException('Invalid username or password.');
        }

    }

    public async update(id:string , updateAuthDto: updateAuth) : Promise<any>
    {
        try{
            let updatedAuth:any=await this.authRepo.findByIdAndUpdate(id,{
                ...updateAuthDto
            }) ;
            return await updatedAuth;
        }catch(error){
            throw new InternalServerErrorException(error);
        }
    }
}

