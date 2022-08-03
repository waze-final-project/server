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
import { User } from './user/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      },
    }),
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'users',
    ),
    UserModule,
    AuthModule,
    BookmarkModule,
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AppModule {}
