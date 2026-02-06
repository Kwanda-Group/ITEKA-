import Departement from "../../models/Departements";

export const createDepartment = async (data) => {
  return await Departement.create(data);
};

export const getDepartmentsByBranch = async (branchId) => {
  return await Departement.find({ branch_id: branchId });
};
