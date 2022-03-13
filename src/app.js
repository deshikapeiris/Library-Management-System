import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import 'dotenv/config';

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