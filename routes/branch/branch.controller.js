import * as BranchService from "./branch.service.js";

export const create = async (req, res, next) => {
  try {
    const branch = await BranchService.createBranch(req.body);
    res.status(201).json({ success: true, data: branch });
  } catch (err) {
    next(err);
  }
};

export const getByInstitution = async (req, res, next) => {
  try {
    const branches = await BranchService.getBranchesByInstitution(
      req.params.institutionId
    );
    res.json({ success: true, data: branches });
  } catch (err) {
    next(err);
  }
};
