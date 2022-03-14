import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import 'dotenv/config';
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || "8088";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
    res.send("<h2>Library system api</h2>");
    next();
});

app.listen(PORT, () => {
    logger.info(`Sever is up and running on PORT ${PORT}`);
});

//database connection
const URL = process.env.MONGODB_URL;

//mongo db configaration
mongoose.connect(URL, {
    useNewUrlParser: true,
});


//mongo DB connection
const connection = mongoose.connection;

//open the connection
connection.once('open', () => {
    logger.info("Mongodb Connection Success !");
})