import { Types, Document } from "mongoose";
import { ICar } from "./car";

export interface IBrand {
    _id: Types.ObjectId;
    Active: boolean,
    Name: String,
    Cars: [Types.ObjectId] | [ICar]
}

export type IBrandModel = IBrand & Document;
