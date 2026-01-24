import mongoose from "mongoose"

// create the system logs modal

const SystemLogsSchema = new mongoose.Schema({
    event_type : {type:String , required:true},
    description : {type:String , required:true},
    ip_address : {type:String , required:true},
    created_at : {type:Date , default:Date.now()}
});

// export the modal
const SystemLogs = mongoose.model('SystemLogs', SystemLogsSchema)

export default SystemLogs;
