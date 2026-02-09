// modules/appointments/appointment.service.js
import Appointment from "./appointment.model.js";
import service from "../../models/services.js";
import TimeSlot from "../../models/timeSlotsModal.js";
import AppointmentLog from "../../models/AppointmentLogsModal.js";
import QueueTicket from "../../models/QueueTicketsModal.js";
import Queue from "../../models/QueueModal.js";
import crypto from "crypto";

const generateCode = () => crypto.randomBytes(4).toString("hex");

export const placeAppointment = async ({
  user_id,
  service_id,
  institution_id,
  appointment_date,
  appointment_time,
  priority_level
}) => {
  const service = await service.findById(service_id);
  if (!service || service.status !== "active") {
    throw new Error("Service unavailable");
  }

  let status = service.requires_approval ? "pending" : "booked";

  const appointment = await Appointment.create({
    user_id,
    service_id,
    Instutition_id: institution_id,
    appointment_date,
    appointment_time,
    priority_level,
    booking_code: generateCode(),
    qr_code_url: generateCode(),
    status
  });

  await AppointmentLog.create({
    appointement_id: appointment._id,
    action: "created",
    performanced_by: user_id
  });

  return appointment;
};


export const confirmAppointment = async (appointment_id, staff_id) => {
  const appointment = await Appointment.findByIdAndUpdate(
    appointment_id,
    { status: "booked" },
    { new: true }
  );

  if (!appointment) throw new Error("Appointment not found");

  await AppointmentLog.create({
    appointement_id: appointment._id,
    action: "verfied",
    performanced_by: staff_id
  });

  return appointment;
};


export const rescheduleAppointment = async (
  appointment_id,
  new_date,
  new_time,
  user_id
) => {
  const appointment = await Appointment.findByIdAndUpdate(
    appointment_id,
    {
      appointment_date: new_date,
      appointment_time: new_time,
      status: "rescheduled"
    },
    { new: true }
  );

  await AppointmentLog.create({
    appointement_id: appointment._id,
    action: "rescheduled",
    performanced_by: user_id
  });

  return appointment;
};


export const cancelAppointment = async (appointment_id, user_id) => {
  const appointment = await Appointment.findByIdAndUpdate(
    appointment_id,
    { status: "canceled" },
    { new: true }
  );

  await AppointmentLog.create({
    appointement_id: appointment._id,
    action: "cancelled",
    performanced_by: user_id
  });

  return appointment;
};


export const getUserAppointments = (user_id) => {
  return Appointment.find({ user_id }).populate("service_id");
};

export const getInstitutionAppointments = (institution_id) => {
  return Appointment.find({ Instutition_id: institution_id });
};
