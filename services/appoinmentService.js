const appointmentRepository = require('../repositories/appointmentRepository');

exports.getAllAppointments = async (filters) => {
  try {
    return await appointmentRepository.getAllAppointments(filters);
  } catch (error) {
    throw new Error(error.message);
  }
};
