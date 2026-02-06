// modules/auth/auth.middleware.js
import jwt from "jsonwebtoken";
import UserSession from "../models/userSessionModal.js";
import userModal from "../models/userModal.js";
import InstutitionModal from "../models/InstutitionModal.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const session = req.headers["x-session-token"];

    if (!token || !session) throw new Error("Unauthorized");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const validSession = await UserSession.findOne({
      session_token: session,
      user_id: decoded.user_id
    });

    if (!validSession) throw new Error("Session expired");

    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};


// authorize users to access specific resources
export const authorize = (requiredRole) => {
  return async (req, res, next) => {

    // check if the user exists for the specific instutition
    const user = await userModal.findById(req.user.user_id).populate("instutition");
    const exists = await InstutitionModal.findById(user.instutition._id);

    if(!exists) {
      return res.status(403).json({ message: "Access denied due to invalid institution" });
    }

    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: "Access denied due to insufficient role" });
    }
    next();
  };
};