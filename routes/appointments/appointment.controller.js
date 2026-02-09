// modules/appointments/appointment.controller.js
import * as AppointmentService from "./appointment.service.js";

export const create = async (req, res, next) => {
  try {
    const appointment = await AppointmentService.placeAppointment({
      ...req.body,
      user_id: req.user.id
    });

    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    next(err);
  }
};

export const confirm = async (req, res, next) => {
  try {
    const appointment = await AppointmentService.confirmAppointment(
      req.params.id,
      req.user.id
    );

    res.json({ success: true, data: appointment });
  } catch (err) {
    next(err);
  }
};

export const reschedule = async (req, res, next) => {
  try {
    const appointment = await AppointmentService.rescheduleAppointment(
      req.params.id,
      req.body.date,
      req.body.time,
      req.user.id
    );

    res.json({ success: true, data: appointment });
  } catch (err) {
    next(err);
  }
};

export const cancel = async (req, res, next) => {
  try {
    const appointment = await AppointmentService.cancelAppointment(
      req.params.id,
      req.user.id
    );

    res.json({ success: true, data: appointment });
  } catch (err) {
    next(err);
  }
};

export const myAppointments = async (req, res, next) => {
  try {
    const appointments = await AppointmentService.getUserAppointments(
      req.user.id
    );

    res.json({ success: true, data: appointments });
  } catch (err) {
    next(err);
  }
};
