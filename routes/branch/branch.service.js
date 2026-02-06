import Branch from "../../models/Branches";

export const createBranch = async (data) => {
  return await Branch.create(data);
};

export const getBranchesByInstitution = async (institutionId) => {
  return await Branch.find({ institution_id: institutionId });
};
