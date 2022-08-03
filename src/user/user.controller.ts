/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() userDto: User) {
    await this.userService.create(userDto);
  }
  @Get()
  async getAllUser() {
    const user = await this.userService.findAll();
    return user.map((u) => ({ id: u.id,firstName:u.firstName,lastName:u.lastName,email:u.email }))
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
