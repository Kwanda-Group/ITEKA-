import mongoose from 'mongoose';

// create the service schedule schema

const ServiceScheduleSchema = new mongoose.Schema({
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    day_of_week: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    max_bookings: { type: Number, required: true },
    status:{type:String, enum:['active' , 'done'], default:'active', required:true},
    createdAt :{type:Date, default:Date.now},
});