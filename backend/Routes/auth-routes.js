import express from "express";
import userModel from "../Models/user-model.js";
import bcrypt from "bcrypt";
import { getToken } from "../Utils/helper.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  // this code is run when the /register api endpoint is call as a post request

  // req.body will be of the format {email, password, firstName, lastName, username }
  const { email, password, firstName, lastName, username } = req.body;
  if(!email || !password || !firstName || !lastName || !username){
    return res
      .status(400)
      .json({ error: "One or More fields are empty." });
  }

  // Check Given emial is exist in our Database or not.
  const user = await userModel.findOne({$or: [{email: email}, {username: username}] });
  if (user) {
    if(user.email===email){
      return res
        .status(401)
        .json({ error: "A user with this email already exists." });
    }else{
      return res
        .status(401)
        .json({ error: "A user with this Username already exists." });
    }
  }

  // create a new user in the DB
  // we don't store password in plain text so encrypt it.
  const hashedPassword = await bcrypt.hash(password, 13);
  const newUserData = {
    email,
    password: hashedPassword,
    firstName,
    lastName,
    username,
  };
  const newUser = await userModel.create(newUserData);

  // we want to create the token to return to the user
  const token = await getToken(newUser);

  //return the result to the user
  const userToken = { ...newUser.toJSON(), token };
  delete userToken.password;

  return res
    .status(201)
    .send({ message: "User Registred Successfully.", ...userToken });
});

router.post("/login", async (req, res) => {
  // this code is run when the /login api endpoint is call as a post request

  // req.body will be of the format {email, password }
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "One or More fields are empty." });
  }
  // Check Given user is exist in our Database or not.
  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ error: "Please enter a valid email address." });
  }

  // check password is correct or not.
  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    return res.status(403).json({ error: "Wrong Password." });
  }
  // we want to create the token to return to the user
  const token = await getToken(user);

  //return the result to the user
  const userToken = { ...user.toJSON(), token };
  delete userToken.password;

  return res
    .status(201)
    .send({ message: "User Login Successfully.", ...userToken });
});
export default router;
