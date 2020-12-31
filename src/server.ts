import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");

const app = require("express")();
const server = require("http").createServer(app);
dotenv.config();

// GraphQL Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
    message: () => "Hello Wold!",
};

// GraphQL Endpoings
// app.use(
//     "/graphql",
//     express_graphql({
//         schema: schema,
//         rootValue: root,
//         graphiql: true,
//     })
// );

// API setup
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

// Mongoose setup
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", true);

const connectToDatabase = async () => {
    try {
        mongoose.connect(process.env.DATABASEURL!, {
            useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.set("db", process.env.DATABASEUR);
    } catch (err) {
        // To some kind of error handling here
    }
};
connectToDatabase();

// This will require the schemas for the database and it can reference the stuff
require("./models");

const router = express.Router();

// Route/API endpoints
import routes from "./routes";
router.use("/", routes);

// Do some kind of route authoriation here
// router.use()

//Setup the server
app.use("/api", router);

app.listen(8080, () => {
    console.log("Normal  api: localhost:8080/api");
    console.log("GraphQL api: localhost:8080/graphql");
});

export default { server, app };
