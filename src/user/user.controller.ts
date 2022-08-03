/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { UserSchema } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userDto: User) {
    await this.userService.create(userDto);
  }

  // @Get()
  // async findAll(): Promise<User[]> {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<User> {
  //   return this.userService.findOne(id);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string) {
  //   return this.userService.delete(id);
  // }
}
