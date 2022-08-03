/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { UserSchema } from './schema/user.schema';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDto>,
  ) {}

  // async create(userDto: UserDto) {
  //   const createdUser = await this.userModel.create(userDto);
  //   return createdUser;
  // }

  // async findAll(): Promise<User[]> {
  //   return this.userModel.find().exec();
  // }

  // async findOne(id: string): Promise<User> {
  //   return this.userModel.findOne({ _id: id }).exec();
  // }

  // async delete(id: string) {
  //   const deletedUser = await this.userModel
  //     .findByIdAndRemove({ _id: id })
  //     .exec();
  //   return deletedUser;
  // }
}
