import { Types, Document } from "mongoose";
import { IBrand } from "./brand";

enum Scale {
  OneTenth = "1/10",
  OneTwetlth = "1/12",
  OneEigth = "1/8"
}

export interface ICar {
    _id: Types.ObjectId;
    Active: boolean,
    Name: String,
    Brand: Types.ObjectId | IBrand,
    Scale: Scale
}

export type ICarModel = ICar & Document;
