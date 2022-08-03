/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Hash } from 'crypto';

export class UserDto {
  id: Hash
  @IsNotEmpty()
  name: string;
  age: number;
  breed: string;
}
