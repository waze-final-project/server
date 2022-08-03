/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from './prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user/user.service';
import { UserSchema } from './user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Ron:vCYuIhUCuPxa79rK@teat-nestjs.z5gnevy.mongodb.net/nest-maps?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
})
export class AppModule {}
