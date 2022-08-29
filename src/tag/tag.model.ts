import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {
  @Prop({type: String, required: true})
  name: string;
  @Prop({type: String, required: true})
  description: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);