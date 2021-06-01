import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {AuthController } from './controller/auth.controller'
import { AuthSchema } from './model/auth.model';
import { AuthService } from './service/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Auth', schema: AuthSchema
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
