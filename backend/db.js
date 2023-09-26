import mongoose from "mongoose";
import CONFIG from './config.js';

const Connection = async () => {
  const DB_URL = CONFIG.db_username + CONFIG.db_password + CONFIG.db_url;
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("Database connected Successfully.");
  } catch (error) {
    console.log("Database Connection failed, Please Try again latter.", error);
  }
};
export default Connection;