import express from "express";
import * as DepartmentController from "./department.controller.js";

const router = express.Router();

router.post("/", DepartmentController.create);
router.get("/branch/:branchId", DepartmentController.getByBranch);

export default router;
