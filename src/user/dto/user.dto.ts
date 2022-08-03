/* eslint-disable prettier/prettier */
// export interface UserDto {
//    name: string;
//    age: number;
//    breed: string;
// import { Hash } from 'crypto';

import { IsNotEmpty } from "class-validator";

export interface UserDto {
  id: number;
  firstName: string;
  lastName: string; 
  email: string;
}
