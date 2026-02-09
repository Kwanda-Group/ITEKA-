import * as ServiceController from "./services.controller.js";
import express from "express";
import { authenticate , allowRoles } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// create a service
router.post("/",   authenticate,
  allowRoles("admin", "super_admin"), ServiceController.create);

// get all services
router.get("/", ServiceController.getAll);

// get services by institution
router.get("/institution/:institutionId", ServiceController.getByInstitution);

// get services by branch
router.get("/branch/:branchId", ServiceController.getByBranch);

// get services by department
router.get("/department/:departmentId", ServiceController.getByDepartment);

// update a service
router.put("/:serviceId",   authenticate,
  allowRoles("admin", "super_admin"), ServiceController.update);

//change the service status
router.patch("/:serviceId/status", authenticate,
  allowRoles("admin", "super_admin"), ServiceController.deactivate);

// delete a service
router.delete("/:serviceId",   authenticate,
  allowRoles("admin", "super_admin"), ServiceController.delete);

export default router;