// modules/institutions/instutition.routes.js
import express from "express";
import * as InstitutionController from "./instutition.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { allowRoles } from "../../middlewares/role.middleware.js";

const router = express.Router();

/**
 * Public / authenticated
 */
router.get("/", authenticate, InstitutionController.getAll);
router.get("/:id", authenticate, InstitutionController.getOne);

/**
 * Admin only
 */
router.post(
  "/",
  authenticate,
  allowRoles("admin", "super_admin"),
  InstitutionController.create
);

router.patch(
  "/:id",
  authenticate,
  allowRoles("admin", "super_admin"),
  InstitutionController.update
);

router.delete(
  "/:id",
  authenticate,
  allowRoles("super_admin"),
  InstitutionController.remove
);

export default router;
