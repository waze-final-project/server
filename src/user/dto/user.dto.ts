/* eslint-disable prettier/prettier */
<<<<<<< HEAD
export interface UserDto {
   name: string;
   age: number;
   breed: string;
=======
import { IsNotEmpty } from 'class-validator';
import { Hash } from 'crypto';

export class UserDto {
  id: Hash
  @IsNotEmpty()
  name: string;
  age: number;
  breed: string;
>>>>>>> 4d04eca60ab2db062d675c52ea948ed2366c8683
}
