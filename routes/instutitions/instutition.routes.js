import express from "express";
import * as InstitutionController from "./instutition.controller.js";

const router = express.Router();

router.post("/", InstitutionController.create);
router.get("/", InstitutionController.getAll);

export default router;
