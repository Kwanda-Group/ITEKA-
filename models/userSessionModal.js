// modules/sessions/session.model.js
import mongoose from "mongoose";

const userSessionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  device_info: { type: String, required: true },
  ip_address: { type: String, required: true },
  last_active_at: { type: Date, default: Date.now },
  session_token: { type: String, required: true, unique: true },
  expires_at: { type: Date, required: true }
});

export default mongoose.model("UserSession", userSessionSchema);
