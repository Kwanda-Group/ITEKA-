import mongoose from 'mongoose';

// create the instution branch schema
const BranchSchema = new mongoose.Schema({
    institution_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Instutition', required: true },
    name:{type:String , required:true},
    location:{type:String, required:true},
    status:{type:String, enum:['active' , 'inactive'], default:'active', required:true},
    createdAt :{type:Date, default:Date.now},
})

// export the Branch model
const Branch = mongoose.model('Branch', BranchSchema);
export default Branch;