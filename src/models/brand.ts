import mongoose from "mongoose";
import { IBrandModel } from "../types";

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    Active: { type: Boolean, requird: false },
    Name: { type: String, required: true },
    Cars: { type: [mongoose.Schema.Types.ObjectId], required: false },
});

export const BrandModel = mongoose.model<IBrandModel>("Brand", BrandSchema);
