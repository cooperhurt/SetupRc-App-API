import express from "express";
import { CarModel } from "../models";

const router = express.Router();

// This is recommended to
router
    .route("/")
    .get(async (req, res) => {
        return res.status(200).json({
            entity: [
                {
                    title: "Florida Carpet Nationals",
                    driverName: "Spencer Rivkin",
                    image:
                        "https://blog.jconcepts.net/wp-content/uploads/2019/11/Beachline-track.jpg",
                    price: 0,
                    horizontal: true,
                },
                {
                    title: "Reedy Race of Champions",
                    driverName: "Dustin Evans",
                    image:
                        "https://www.ocrcraceway.com/img/race-events/race-events-header-1.png",
                    price: 220,
                },
                {
                    title: "Tacoma Nationals",
                    driverName: "Spencer Rivkin",
                    image:
                        "https://static1.squarespace.com/static/5e2235f2e5db866dd930067b/5e36080b12092f15874c4e86/5e50a2ac643db018c8596a39/1598630545032/Tacoma.jpg?format=1500w",
                    price: 40,
                },
                {
                    title: "Internet of Things (IoT) is Here to Stay",
                    driverName: "Spencer Rivkin",
                    image: "https://source.unsplash.com/I7BSOoPa5hM/840x840",
                    price: 188,
                    horizontal: true,
                },
                {
                    title: "Coffee - A Drop of Happiness in a Cup",
                    driverName: "Spencer Rivkin",
                    image: "https://source.unsplash.com/Ws4wd-vJ9M0/840x840",
                    price: 180,
                },
            ],
        });
    })
    .post(async (req, res) => {
        const setup = req.body;
        await CarModel.insertMany(setup);
        return res.status(200).json({});
    });

export default router;
