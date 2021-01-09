import mongoose from "mongoose";
import { ICarModel, ISetupModel } from "../types";

const Schema = mongoose.Schema;

const SetupSchema = new Schema({
    Active: { type: Boolean, required: true },
    Name: { type: String, required: true },
    DriverName: { type: String, required: false },
    ImagePath: { type: String, required: false },
    Brand: { type: Schema.Types.ObjectId, ref: "Brand", required: false }, // TODO possibly add in reference to brand with autopopulate
});

export const SetupModel = mongoose.model<ISetupModel>("Setups", SetupSchema);
