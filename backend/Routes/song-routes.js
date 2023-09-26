import express from "express";
import songModel from "../Models/song_model.js";
import userModel from "../Models/user-model.js";
import { getToken } from "../Utils/helper.js";
import { authentication } from '../Midleware/authenticate.js'
const router = express.Router();

router.post("/create", authentication, async (req, res) => {
  // this code is run when the /create api endpoint is call as a post request

  // req.body will be of the format {name, thumbnail, track }
  const { name, thumbnail, track } = req.body;
  if (!name || !thumbnail || !track) {
    return res.status(301).send({ error: "Insufficient details to add Song." });
  }
  const userId = req.userId;
  const songDetails = { name, thumbnail, track, artist: userId };

  // create a new Song in the DB
  const newSong = await songModel.create(songDetails);
  return res
    .status(201)
    .send({newSong});
});


// Get all songs created by me.
router.get("/getmysongs", authentication, async (req, res) => {
  // this code is run when the /song/get/mysongs api endpoint is call as a get request
  
  // Get all songs if artist equals current user
  const songs = await songModel.find({ artist: req.userId });
  return res
    .status(200)
    .send({ data: songs });
});

// Get all songs published  by any artist.
router.get("/get/artist/:artistId", authentication, async (req, res) => {
  // this code is run when the /song/get/artist/artistId api endpoint is call as a get request
  const  artistId  = req.params.artistId;

  // Check Given artist is exist in our Database or not.
  const artist = await userModel.findOne({ _id: artistId });
  if (!artist) {
    return res.status(403).json({ error: "Artist does not exist." });
  }

  // Get all songs if artist equals current user
  const songs = await songModel.find({ artist: artistId });
  return res.status(200).send({ data: songs });
});

// Get one song by song name.
router.get("/getsong/:songName", authentication, async (req, res) => {
  // this code is run when the /song/get/song/songname api endpoint is call as a get request
  const songName = req.params.songName;

  // Get song by songName

  // need to matched based on expression or pattern later
  const songs = await songModel.find({ name: songName });
  return res.status(200).send({ data: songs });
});
export default router;
