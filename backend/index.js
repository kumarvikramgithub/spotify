import express from "express";
import connection from "./db.js";
import constant from "./config.js";
import authRouter from "./Routes/auth-routes.js";
import songRouter from "./Routes/song-routes.js";
import playlistRouter from "./Routes/playlist-routes.js";
import cors from 'cors';

const app = express();
connection();
// await auth();
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/song", songRouter);
app.use("/playlist", playlistRouter);

app.listen(constant.port, () => {
  console.log(`Server started at PORT NO. ${constant.port}`);
});
