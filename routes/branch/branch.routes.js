import express from "express";
import * as BranchController from "./branch.controller.js";

const router = express.Router();

router.post("/", BranchController.create);
router.get("/institution/:institutionId", BranchController.getByInstitution);

export default router;
