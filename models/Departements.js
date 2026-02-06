import mongoose from 'mongoose';

// create the Departements schema

const DepartementSchema = new mongoose.Schema({
    institution_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Instutition', required: true },
    branch_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch'},
    name:{type:String , required:true},
    description:{type:String, required:true},
})

const Departement = mongoose.model('Departement', DepartementSchema);
export default Departement;