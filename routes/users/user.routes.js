// modules/users/user.routes.js
import express from "express";
import * as UserController from "./user.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js"
import { allowRoles } from "../../middlewares/auth.middleware.js";
import { isSelfOrAdmin } from "../../middlewares/ownership.middleware.js";

const router = express.Router();

/* Admin routes */
router.post(
  "/",
  authenticate,
  allowRoles("admin", "super_admin"),
  UserController.createUser
);

router.get(
  "/",
  authenticate,
  allowRoles("admin", "super_admin"),
  UserController.getUsers
);

router.patch(
  "/:id/role",
  authenticate,
  allowRoles("super_admin"),
  UserController.changeRole
);

router.patch(
  "/:id/status",
  authenticate,
  allowRoles("admin", "super_admin"),
  UserController.disableUser
);

/* Self or Admin */
router.get(
  "/:id",
  authenticate,
  isSelfOrAdmin,
  UserController.getUser
);

router.patch(
  "/:id",
  authenticate,
  isSelfOrAdmin,
  UserController.updateUser
);

export default router;
