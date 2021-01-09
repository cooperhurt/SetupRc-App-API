import { Types, Document } from "mongoose";

export interface dayHours{
    Day: String,
    Start: String,
    End: String
}

export interface ITrack {
    _id: Types.ObjectId;
    Active: boolean;
    Name: String;
    Latitude?: String;
    Longitiude?: String;
    Hours?: [dayHours];
}

export type ITrackModel = ITrack & Document;
