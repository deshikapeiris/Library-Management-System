import express from "express";
import cors from "cors";
import passport from "passport";
import session  from "express-session";
import logger from "./utils/logger";
import config from "./configs";
import 'dotenv/config';
import { connect } from "./utils/DB.Connection";
import { googleAuth } from "./configs/google.auth"; 

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(
    session({
        secret:config.SESSION_SECRET,
    })
)


app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next) => {
    res.send("<h2> 📚 Library system api</h2>");
    next();
});

app.listen(PORT, () => {
    logger.info(`🌻 Sever is up and running on PORT ${PORT}`);
    connect();
    googleAuth(passport);
});