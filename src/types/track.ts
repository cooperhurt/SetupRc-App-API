import { Types, Document } from "mongoose";

export interface ITrack {
    _id: Types.ObjectId;
    Active: boolean;
    Name: String;
    Latitude?: String;
    Longitiude?: String;
    Hours?: [{ Day: String; Start: String; End: String }];
}

export type ITrackModel = ITrack & Document;
