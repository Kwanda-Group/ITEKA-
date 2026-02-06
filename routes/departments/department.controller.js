import * as DepartmentService from "./department.service.js";

export const create = async (req, res, next) => {
  try {
    const department = await DepartmentService.createDepartment(req.body);
    res.status(201).json({ success: true, data: department });
  } catch (err) {
    next(err);
  }
};

export const getByBranch = async (req, res, next) => {
  try {
    const departments = await DepartmentService.getDepartmentsByBranch(
      req.params.branchId
    );
    res.json({ success: true, data: departments });
  } catch (err) {
    next(err);
  }
};
