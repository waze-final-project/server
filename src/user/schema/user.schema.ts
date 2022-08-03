/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';


export const UserSchema=new mongoose.Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true },
  email: {type: String, required: true }
}); 
// export type UserDocument = User & Document;

// @Schema()
// export class User {
//   // @Prop()
//   // id:string;

//   @Prop()
//   firstName: string;

//   @Prop()
//   lastName: number;

//   @Prop()
//   email: string;
// }

// export const UserSchema = SchemaFactory.createForClass(User);
