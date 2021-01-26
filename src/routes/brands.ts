import express from "express";
import { BrandModel } from "models";

const router = express.Router();

router
    .route("/")
    // This route will return all setups from the application that are currently active
    .get(async (req, res) => {
        const brands = await BrandModel.find({ Active: true }).lean();
        return res.status(200).json({ brands: brands });
    })
    .post(async (req, res) => {
        // We probably will want to sanitize this
        const brand = req.body;
        try {
            const createdBrand = await BrandModel.create(brand);
            return res.status(200).json({ setup: createdBrand });
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
        const brand = await BrandModel.find({ Active: true, _id: id }).lean();
        return res.status(200).json({ setup: brand });
    })
    .put(async (req, res) => {
        const { id } = req.params;
        // We probably will want to sanitize this
        const brand = req.body;

        try {
            const updatedBrand = await BrandModel.findOneAndUpdate(
                { Active: true, _id: id },
                brand,
                { new: true }
            ).lean();
            return res.status(200).json({ setup: updatedBrand });
        } catch (err) {
            return res.status(400).json({
                message: "Error occured during updating the Brand",
                error: err,
            });
        }
    });

export default router;
