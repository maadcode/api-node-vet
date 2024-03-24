const appoinmentService = require('../services/appoinmentService');
const FilterAppointmentRequest = require('../models/filterAppointmentRequest');

exports.getAllAppointments = async (req, res) => {
  try {
    const { dateFrom, dateUntil } = req.query;
    const filters = new FilterAppointmentRequest(dateFrom, dateUntil);
    const appoinmentsResult = await appoinmentService.getAllAppointments(filters);
    return res.status(200 ).json(appoinmentsResult);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
