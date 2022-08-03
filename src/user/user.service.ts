/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async create(userDto: User) {
    const createdUser = await this.userModel.create(userDto);
    return createdUser;
  }

  async findAll() {
    const user=await this.userModel.find().exec();
    return user;
  }

  async findOne(id: string): Promise<User> {
    const user= await this.userModel.findById(id).exec();
    if(!user){
      throw new NotFoundException(`user with ${id} id not found🙄`)
    }
    return user
  }

  async delete(id: string) {
    const deletedUser = await this.userModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUser;
  }
}
