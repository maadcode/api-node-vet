const appointmentRepository = require('../repositories/appointmentRepository');
const ResumeAppointmentResponse = require('../models/responses/resumeAppointmentResponse');


exports.getAllAppointments = async (filters) => {
  try {
    return await appointmentRepository.getAllAppointments(filters);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getResumeAppointments = async () => {
  try {
    let resumeAppointments = new ResumeAppointmentResponse();
    const { daily, weekly, monthly } = await appointmentRepository.getResumeAppointments();
    resumeAppointments.appointmentsDaily = daily;
    resumeAppointments.appointmentsWeekly = weekly;
    resumeAppointments.appointmentsMonthly = monthly;
    const appointmentsForMonth = await appointmentRepository.getAppointmentsForMonth();
    resumeAppointments.appointmentsForMonth = appointmentsForMonth;
    return resumeAppointments;
  } catch (error) {
    throw new Error(error.message);
  }
}