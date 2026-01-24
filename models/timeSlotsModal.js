import mongoose from 'mongoose';

// create the time slots schema
const TimeSlotSchema = new mongoose.Schema({
    service_schedule_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceSchedule'},
    date: { type: Date, required: true },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    available_capacity: { type: Number, required: true },
    status:{type:String, enum:['available' , 'unavailable'], default:'available', required:true},
});

// create the modal and export it
const TimeSlot = mongoose.model('TimeSlot', TimeSlotSchema);
export default TimeSlot;