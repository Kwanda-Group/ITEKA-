import mongoose from 'mongoose';

// create the notifications schema
const NotificationSchema = new mongoose.Schema({
    user_id :{type:mongoose.Schema.Types.ObjectId , ref:'User' , required:true},
    appointment_id:{type:mongoose.Schema.Types.ObjectId , ref:'Appointment' , require:true},
    phone_number : {type:String , required:true},
    message: {type:String , required: true},
    status : {type : String  ,  enum : ['sent' , 'failed'] , required:true},
    sent_at : {type:Date , default:Date.now()}
});

// create the modal and export it
const notification = mongoose.model('Notification' , NotificationSchema);
export default notification ;