import * as ServiceController from "./services.controller.js";
import express from "express";

const router = express.Router();

// create a service
router.post("/", ServiceController.create);

// get all services
router.get("/", ServiceController.getAll);

// get services by institution
router.get("/institution/:institutionId", ServiceController.getByInstitution);

// get services by branch
router.get("/branch/:branchId", ServiceController.getByBranch);

// get services by department
router.get("/department/:departmentId", ServiceController.getByDepartment);

// update a service
router.put("/:serviceId", ServiceController.update);

//change the service status
router.patch("/:serviceId/status", ServiceController.deactivate);

// delete a service
router.delete("/:serviceId", ServiceController.delete);

export default router;