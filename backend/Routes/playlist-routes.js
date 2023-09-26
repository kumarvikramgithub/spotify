import express from "express";
import songModel from "../Models/song_model.js";
import userModel from "../Models/user-model.js";
import playlistModel from "../Models/playlist-model.js";
import { getToken } from "../Utils/helper.js";
import { authentication } from "../Midleware/authenticate.js";
const router = express.Router();

router.post("/create", authentication, async (req, res) => {
  // this code is run when the /create api endpoint is call as a post request
  // req.body will be of the format {name, thumbnail, songs }
  const { name, thumbnail, songs } = req.body;
  if (!name || !thumbnail || !songs) {
    return res.status(301).send({ error: "Insufficient details to create Playlist." });
  }
  const userId = req.userId;
  const playlistDetails = { name, thumbnail, songs, owner: userId, collaborators: [] };

  // create a new Song in the DB
  const newPlaylist = await playlistModel.create(playlistDetails);
  return res.status(201).send({ newPlaylist });
});

// Get a playlist by pplaylist Id.
// we will get playlistId as a route parameter and we will return the playlist
router.get("/get/playlist/:playlistId", authentication, async (req, res) => {
  // this code is run when the /get/id api endpoint is call as a get request
    const playlistId = req.params.playlistId;
  // Get all songs if artist equals current user
  const playlist = await playlistModel.findOne({ _id: playlistId });
  if (!playlist) {
    return res
      .status(301)
      .send({ error: "Invalid Playlist ID." });
  }
  return res.status(200).send({ data: playlist });
});

// Get all Playlist made  by an artist.
router.get("/get/artist/:artistId", authentication, async (req, res) => {
  // this code is run when the /get/:artistId api endpoint is call as a get request
  const artistId = req.params.artistId;
  // Get all songs if artist equals current user
  const artist = await userModel.findOne({_id: artistId});
  if (!artist) {
    return res.status(301).send({ error: "Invalid Artist ID." });
  }
  const playlists = await playlistModel.find({ owner: artistId });
  return res.status(200).send({ data: playlists });
});

// Add song in playlist.
router.post("/add/song", authentication, async (req, res) => {
  // this code is run when the /add/:songId api endpoint is call as a post request
  const currentUserId = req.userId;
    const { playlistId, songId } = req.body;
    console.log("ID: ", currentUserId);
    const playlist = await playlistModel.findOne({ _id: playlistId });
    console.log("PlId: ",playlist );
    if (!playlist) {
      return res.status(301).send({ error: "Playlist does not exist." });
    }
  // Check if currentUser owns this playlist or is a collaborator
    if (!playlist.owner.equals(currentUserId) && !playlist.collaborators.includes(currentUserId)) {
      return res.status(400).send({ error: "Not allowed" });
    }
  // Check song is available or not
  const song = await songModel.findOne({ _id: songId });
  if (!song) {
    return res.status(301).send({ error: "Invalid song Id" });
  }

  // add song in playlist
  playlist.songs.push(songId);
  await playlist.save();
  return res.status(200).send({ playlist });
});
export default router;
