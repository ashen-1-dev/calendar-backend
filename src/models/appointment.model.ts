import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {Tag, TagDocument} from "../tag/tag.model";

export enum AppointmentType {
    Holiday = 'holiday',
    Event = 'event',
    Other = 'other',
}

export interface AppointmentState {
    type: AppointmentType;
}

export interface HolidayState extends AppointmentState {
    type: AppointmentType.Holiday;
    value: number;
}

export interface EventState extends AppointmentState {
    type: AppointmentType.Event;
    value: string;
}

export interface OtherState extends AppointmentState {
    type: AppointmentType.Other;
    value: string;
}

export type AllState = HolidayState | EventState | OtherState;


@Schema()
export class Appointment {
    @Prop({type: String, required: true})
    name: string;
    @Prop({type: Date, required: true})
    date: Date;
    @Prop({ type: [Types.ObjectId], ref: Tag.name, default: [] })
    tags?: TagDocument[];
    @Prop({type: Object})
    state: AllState
}

export type AppointmentDocument = Appointment & Document;
export const AppointmentSchema = SchemaFactory.createForClass(Appointment)