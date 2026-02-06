import * as InstitutionService from "./instutition.service.js";

export const create = async (req, res, next) => {
  try {
    const institution = await InstitutionService.createInstitution(req.body);
    res.status(201).json({ success: true, data: institution });
  } catch (err) {
    next(err);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const institutions = await InstitutionService.getInstitutions();
    res.json({ success: true, data: institutions });
  } catch (err) {
    next(err);
  }
};
