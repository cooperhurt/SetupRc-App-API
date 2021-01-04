import { Types, Document } from "mongoose";
import { ICar } from "./car";
import { ITrack } from "./track";


export interface ISetup {
    _id: Types.ObjectId;
    Active: boolean,
    Car: ICar | Types.ObjectId
    DriverName: String,
    Name: String,
    Track: ITrack | Types.ObjectId,
    TrackCondition: String,
    TrackSize: String,
    SetupImage: String
}

export type ISetupModel = ISetup & Document;
