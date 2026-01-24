import mogoose from 'mongoose';

// create the mongoose modal
const AppointmentLogSchema = new mogoose.Schema({
    appointement_id: { type: mogoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    action: { type: String,enum : ['created', 'verfied', 'rescheduled' , 'cancelled'] , required: true },
    performanced_by: { type: mogoose.Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now, required: true },
});


// export the AppointmentLog model
const AppointmentLog = mogoose.model('AppointmentLog', AppointmentLogSchema);
export default AppointmentLog;
