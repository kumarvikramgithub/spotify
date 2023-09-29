import mongoose from "mongoose";
import CONFIG from './config.js';

const Connection = async () => {
  const DB_URL = "mongodb+srv://"+CONFIG.db_username + CONFIG.db_password + CONFIG.db_url_afterpassword;
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("Database connected Successfully.");
  } catch (error) {
    console.log("Database Connection failed, Please Try again latter.", error);
  }
};
export default Connection;