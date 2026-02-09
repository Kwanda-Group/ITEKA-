import mongoose from 'mongoose';

// create the staffRoles schema
const StaffRolesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    permissions : [{ type: String, required: true }],
});

const StaffRoles = mongoose.model("Staff_Roles" , StaffRolesSchema);

export default StaffRoles;