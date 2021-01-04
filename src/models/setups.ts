import mongoose from "mongoose";
import { ICarModel, ISetupModel } from "../types";

const Schema = mongoose.Schema;

const SetupSchema = new Schema({
    Active: { type: Boolean, required: true },
    Name: { type: String, required: true },
    Brand: { type: Schema.Types.ObjectId, ref: "Brand", required: false }, // TODO possibly add in 
});

export const SetupModel = mongoose.model<ISetupModel>("Setups", SetupSchema);
