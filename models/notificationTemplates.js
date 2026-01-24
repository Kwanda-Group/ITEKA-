import mongoose from 'mongoose'

// create the  notification Template schema 
const NotificationTemplateSchema = new mongoose.Schema({
    type:{type:String , enum :['confirmation' , 'reminder' , 'cancellation']},
    language:{type:String , enum:['en' , 'kin' , 'fr']},
    content:{type:String , required:true},
    timestap:{type:Date , default:Date.now()}
})

// create the modal and export the modal
const Template = mongoose.model('Template', NotificationTemplateSchema);
export default Template ;