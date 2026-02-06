// modules/auth/auth.service.js
import User from "../users/user.model.js";
import UserSession from "../models/userSessionModal.js";
import { hashPassword, comparePassword } from "../utils/Hash.js";
import { generateToken } from "../utils/Token.js";
import crypto from "crypto";

export const registerUser = async (data) => {
  const password_hash = await hashPassword(data.password);

  const user = await User.create({
    ...data,
    password_hash
  });

  return user;
};

export const loginUser = async ({ email, password, device_info, ip }) => {
  const user = await User.findOne({ email });

  if (!user || user.status !== "active") {
    throw new Error("Invalid credentials or inactive account");
  }

  const valid = await comparePassword(password, user.password_hash);
  if (!valid) throw new Error("Invalid credentials");

  const session_token = crypto.randomBytes(48).toString("hex");

  await UserSession.create({
    user_id: user._id,
    device_info,
    ip_address: ip,
    session_token,
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) // 7 days
  });

  const access_token = generateToken({
    user_id: user._id,
    role: user.role
  });

  return { access_token, session_token, user };
};
