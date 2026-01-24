import mongoose from 'mongoose'

const SubscriptionSchema = new mongoose.Schema({
    instutition_id : {type:mongoose.Schema.Types.ObjectId , ref:'Instutition' , required:true},
    plan_type: {type:String , enum:['basic' , 'standard' , 'premium '] , required:true},
    start_date : {type:Date , required:true},
    end_date : {type:Date , required:true}
})

// create and export the modal
const subscription = mongoose.model('Subscriptions' , SubscriptionSchema)

export default subscription;
