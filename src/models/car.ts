import mongoose from "mongoose";
import { ICarModel } from "../types";

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    Active: { type: Boolean, required: true },
    Brand: { type: Schema.Types.ObjectId, ref: "Brand", required: false }, // TODO possibly add in
    Name: { type: String, required: true },
    Scale: { type: String, required: true },
});

export const CarModel = mongoose.model<ICarModel>("Car", CarSchema);
