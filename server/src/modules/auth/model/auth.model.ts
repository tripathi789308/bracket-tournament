import { InternalServerErrorException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import {
    hashSync,
    genSaltSync
} from 'bcrypt';

export const AuthSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }},
    {
        timestamps:true
    }
).pre<Auth>('save', async function (next) {
    const user = this;
    if (user.password) {
        try {
            const hashedPassword = await hashSync(user.password, genSaltSync(10));
            user.password = hashedPassword;
            next();
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong!');
        }
    }
});;

export interface Auth extends mongoose.Document {
    id?: string;
    firstName: string;
    lastName: string;
    country:string;
    email:string;
    password:string;
}