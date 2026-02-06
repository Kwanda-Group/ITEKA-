// modules/users/user.model.js
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  phone_number: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  instutition : { type: mongoose.Schema.Types.ObjectId, ref: "Instutition" },
  departement : { type: mongoose.Schema.Types.ObjectId, ref: "Departement" },
  branch : { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  role: {
    type: String,
    enum: ["citizen", "staff", "admin", "super_admin" , "instutition_admin" , "manager" , "other" , "developer"],
    default: "citizen",
    required: true
  },

  language_preference: {
    type: String,
    enum: ["en", "kin", "fr"],
    default: "en",
    required: true
  },

  status: {
    type: String,
    enum: ["active", "inactive", "suspended"],
    default: "active",
    required: true
  },

  password_hash: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
