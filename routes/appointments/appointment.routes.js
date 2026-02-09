// modules/appointments/appointment.routes.js
import express from "express";
import * as AppointmentController from "./appointment.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { allowRoles } from "../../middlewares/auth.middleware.js";

const router = express.Router();

/* Citizen */
router.post("/", authenticate, AppointmentController.create);
router.get("/me", authenticate, AppointmentController.myAppointments);
router.patch("/:id/reschedule", authenticate, AppointmentController.reschedule);
router.patch("/:id/cancel", authenticate, AppointmentController.cancel);

/* Staff / Admin */
router.patch(
  "/:id/confirm",
  authenticate,
  allowRoles("staff", "admin", "super_admin"),
  AppointmentController.confirm
);

export default router;
