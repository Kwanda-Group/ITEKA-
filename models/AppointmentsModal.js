import mongoose from 'mongoose';
import Instutition from './InstutitionModal';
import service from './services';

// create the Appointments schema
const AppontmentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Instutition_id : {type : mongoose.Schema.Types.ObjectId, ref: 'Instutition', required:true},
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    branch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch'},
    departement_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Departement'},
    appointment_date: { type: Date, required: true },
    appointment_time: { type: String, required: true },
    booking_code : {type:String, required:true , unique:true},
    qr_code_url : {type:String, required:true , unique:true},
    status:{type:String, enum:['booked' , 'rescheduled' , 'canceled' ,'completed' ,'no_show'], default:'scheduled', required:true},
    priority_level: {type:String, enum:['normal' ,'disabled', 'elderly' , 'vip'], default:'normal', required:true},
});

// export the Appointments model
const Appointment = mongoose.model('Appointment', AppontmentSchema);
export default Appointment;