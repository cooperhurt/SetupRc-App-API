import mongoose from "mongoose";
import { ITrackModel } from "../types";

const Schema = mongoose.Schema;

const dayHourSchema = new Schema({
    Day: { type: String, required: true },
    Start: { type: String, required: true },
    End: { type: String, required: true },
});

const TrackSchema = new Schema({
    Active: { type: Boolean, required: true },
    Name: { type: String, required: true },
    Latitude: { type: String, required: true },
    Longitiude: { type: String, required: true },
    Hours: { type: [dayHourSchema], required: true },
});

export const TrackModel = mongoose.model<ITrackModel>("Tracks", TrackSchema);
