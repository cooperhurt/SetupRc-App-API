import { Types, Document } from "mongoose";

export interface IUser {
    _id: Types.ObjectId;
    Active: boolean,
    Name: String
}

export type IUserModel = IUser & Document;
