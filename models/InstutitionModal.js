import mongoose from "mongoose";

// create the Instutition schema
const InstutitionSchema = new mongoose.Schema({
    name:{type:String, required:true},
    type:{type:String , enum:['government', 'university' , 'school' , 'hospital' , 'tourist' , 'private'], required:true},
    description : {type:String, required:true},
    logo_url:{type:String, required:true},
    contact_phone:{type:String, required:true},
    email:{type:String, required:true},
    address:{type:String, required:true},
    plan_type:{type:String, enum:['basic' ,'standard', 'premium'], default:'basic' , required:true},
    status:{type:String, enum:['active' , 'inactive'], default:'active', required:true},
    createdAt :{type:Date, default:Date.now},
})

// export the Instutition model
const Instutition = mongoose.model('Instutition', InstutitionSchema);
export default Instutition;