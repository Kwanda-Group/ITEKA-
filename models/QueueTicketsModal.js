import mongoose from 'mongoose';

//create the QueueTickets schema
const QueueTicketsSchema = new mongoose.Schema({
    queue_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Queue', required: true },
    appointment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' , required:true},
    queue_number : {type: String , required:true},
    status: { type: String, enum: ['waiting', 'serving','completed' ,'no_show'], default: 'waiting', required: true },
    
})

const QueueTicket = mongoose.model("QueueTickets" , QueueTicketsSchema);
export default QueueTicket;