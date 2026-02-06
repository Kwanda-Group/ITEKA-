import InstutitionModal from "../../models/InstutitionModal";


// create a new institution
export const createInstitution = async (data) => {
  return await InstutitionModal.create(data);
};

// get all institutions
export const getInstitutions = async () => {
  return await InstutitionModal.find({ status: "active" });
};

// get institution by id
export const getInstitutionById = async (id) => {
  return await InstutitionModal.findById(id); 
};

// update institution
export const updateInstitution = async (id, data) => {
  return await InstutitionModal.findByIdAndUpdate(id, data, { new: true }); 
};

//delete institution
export const deleteInstitution = async (id) => {
  return await InstutitionModal.findByIdAndUpdate(id, { status: "inactive" }, { new: true }); 
};