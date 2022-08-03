/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';


export const UserSchema=new mongoose.Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true },
  email: {type: String, required: true }
}); 

<<<<<<< HEAD

export interface User {
  firstName: number;
  lastName: string; 
  email: string;
}
=======
// export type UserDocument = User & Document;
>>>>>>> f4fd025897061018dd12c88707622dfd7902c4f7

