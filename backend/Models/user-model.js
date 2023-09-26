import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  likedSongs: {
    // it will be type as array later
    type: String,
    default: "",
  },
  likedPlaylists: {
    // it will be type as array later
    type: String,
    default: "",
  },
  subscribedArtists: {
    // it will be type as array later
    type: String,
    default: "",
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;