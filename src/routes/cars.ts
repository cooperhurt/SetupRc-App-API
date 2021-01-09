import express from "express";
import { CarModel } from "../models";

const router = express.Router();

router
    .route("/")
    // This route will return all setups from the application that are currently active
    .get(async (req, res) => {
        const cars = await CarModel.find({ Active: true }).lean();
        return res.status(200).json({ cars: cars });
    })
    .post(async (req, res) => {
        // We probably will want to sanitize this
        const brand = req.body;
        try {
            const createdCar = await CarModel.create(brand);
            return res.status(200).json({ car: createdCar });
        } catch (err) {
            return res.status(400).json({
                message: "Error occured during posting of Brand",
                error: err,
            });
        }
    });

router
    .route("/:id")
    .get(async (req, res) => {
        const { id } = req.params;
        const car = await CarModel.find({ Active: true, _id: id }).lean();
        return res.status(200).json({ car: car });
    })
    .put(async (req, res) => {
        const { id } = req.params;
        // We probably will want to sanitize this
        const car = req.body;

        try {
            const updatedCar = await CarModel.findOneAndUpdate(
                { Active: true, _id: id },
                car,
                { new: true }
            ).lean();
            return res.status(200).json({ car: updatedCar });
        } catch (err) {
            return res.status(400).json({
                message: "Error occured during updating the car",
                error: err,
            });
        }
    });

export default router;
