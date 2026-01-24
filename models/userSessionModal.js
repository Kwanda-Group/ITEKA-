import mongoose from 'mongoose';

// create the user session schema
const userSessionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    device_info: { type: String, required: true },
    ip_address: { type: String, required: true },
    last_active_at: { type: Date, default: Date.now, required: true },
    session_token: { type: String, required: true, unique: true },
    expires_at: { type: Date, required: true }
});

// create and export the model
const UserSession = mongoose.model('UserSession', userSessionSchema);
export default UserSession;