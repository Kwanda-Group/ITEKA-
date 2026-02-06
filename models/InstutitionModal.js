// modules/institutions/institution.model.js
import mongoose from "mongoose";

const InstitutionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["government", "university", "school", "hospital", "tourist", "private"],
    required: true
  },
  description: { type: String, required: true },
  logo_url: { type: String, required: true },
  contact_phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },

  plan_type: {
    type: String,
    enum: ["basic", "standard", "premium"],
    default: "basic",
    required: true
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Institution", InstitutionSchema);
