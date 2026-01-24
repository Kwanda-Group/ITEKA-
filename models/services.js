import mongoose from 'mongoose';

// create the services schema
const ServiceSchema = new mongoose.Schema({
    institution_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Instutition', required: true },
    departement_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Departement' },
    name:{type:String , required:true},
    description:{type:String, required:true},
    duration_minutes:{type:String, required:true},
    requires_approval: {type:Boolean , required:true},
    capacity_per_slot:{type:Number, required:true},
    status:{type:String, enum:['active' , 'inactive'], default:'active', required:true},
    createdAt :{type:Date, default:Date.now},
});

// export the service model
const service = mongoose.model('Service', ServiceSchema);
export default service;