import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import { ISetupModel } from "../types";

const Schema = mongoose.Schema;

const SetupSchema = new Schema({
    Active: { type: Boolean, required: true },
    Name: { type: String, required: true },
    DriverName: { type: String, required: false },
    ImagePath: {
        type: String,
        required: false,
        default: "http://setuprc.com/img/SetupRc/defaultTrackCover.png",
    },
    SetupPath: { type: String, required: false },
    EventName: { type: String, required: false },
    Surface: { type: String, required: false },
    Size: { type: String, required: false },
    Car: {
        type: Schema.Types.ObjectId,
        ref: "Car",
        autopopulate: true,
        required: true,
    },
    TrackCondition: { type: String, required: false },
});

SetupSchema.plugin(mongooseAutoPopulate);
export const SetupModel = mongoose.model<ISetupModel>("Setups", SetupSchema);
