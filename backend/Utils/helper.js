import jwt from "jsonwebtoken";
import CONSTANT from "../config.js";
export const getToken = async (user) => {
  //generate token
  const token = jwt.sign({ identifier: user._id }, CONSTANT.jwt_secretKey, {
    expiresIn: "500m",
  });
  return token;
};
