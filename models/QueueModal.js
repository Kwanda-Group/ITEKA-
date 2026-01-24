import mongoose from 'mongoose';

// create the queue schema
const QueueSchema = new mongoose.Schema({
    institution_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Instutition', required: true },
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    date: { type: Date, required: true },
    current_number: { type: Number, required: true, default: 0 },
});

// create the modal and export it
const Queue = mongoose.model('Queue', QueueSchema);
export default Queue;