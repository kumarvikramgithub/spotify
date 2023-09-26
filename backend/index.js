import express from "express";
import connection from "./db.js";
import constant from "./config.js";
import auth from "./Auth/passport-jwt.js";
import authRouter from "./Routes/auth-routes.js";
import songRouter from "./Routes/song-routes.js";
import playlistRouter from "./Routes/playlist-routes.js";

const app = express();
connection();
// await auth();
app.use(express.json());
app.use("/auth", authRouter);
app.use("/song", songRouter);
app.use("/playlist", playlistRouter);

app.listen(constant.port, () => {
  console.log(`Server started at PORT NO. ${constant.port}`);
});
