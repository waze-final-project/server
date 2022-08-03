/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({required: true})
  id:string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: number;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
