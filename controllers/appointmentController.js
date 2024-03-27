const appoinmentService = require('../services/appoinmentService');
const FilterAppointmentRequest = require('../models/filters/filterAppointmentRequest');

exports.getAllAppointments = async (req, res) => {
  try {
    const { dateFrom, dateUntil, served } = req.query;
    const filters = new FilterAppointmentRequest(dateFrom, dateUntil, served);
    const result = await appoinmentService.getAllAppointments(filters);
    if(result.code === 200 || result.code === 201) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json(result.errors[0]);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getResumeAppointments = async (req, res) => {
  try {
    const result = await appoinmentService.getResumeAppointments();
    if(result.code === 200 || result.code === 201) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json(result.errors[0]);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

exports.notifyAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const result = await appoinmentService.sendNotification(appointmentId);
    if(result.code === 200 || result.code === 201) {
      return res.status(result.code).json(result.data);
    } else {
      return res.status(result.code).json(result.errors[0]);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}