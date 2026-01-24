import mongoose from 'mongoose';


//  create the daily statistics schema
const DailyStatisticsSchema = new mongoose.Schema({
    institution_id : {type:mongoose.Schema.Types.ObjectId , ref:'Instutition' , required:true},
    date:{type:Date , required: true},
    total_appointments:{type:Number , required:true},
    completed : {type:Number , required: true},
    no_shows: {type:Number , required: true},
    canceled: {type:Number , reqauired:true}
});

// export the modal

const DailyStatistics = mongoose.model('Statistics' , DailyStatisticsSchema);

export default DailyStatistics