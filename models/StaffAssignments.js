import mongoose from 'mongoose';

// create the staff assignments schema

const StaffAssignmentsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    service_id : {type: mongoose.Schema.Types.ObjectId, ref: 'Service',  required:true},
    branch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
    department_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Departement' , required:true },
})


const StaffAssignments = mongoose.model("Assignments" , StaffAssignmentsSchema);

export default StaffAssignments;
