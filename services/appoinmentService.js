const formData = require('form-data');
const Mailgun = require('mailgun.js');

const appointmentRepository = require('../repositories/appointmentRepository');
const ResumeAppointmentResponse = require('../models/responses/resumeAppointmentResponse');
const Response = require('../models/responses/genericResponse');

exports.getAllAppointments = async (filters) => {
  try {
    let response = new Response();
    let appointments = await appointmentRepository.getAllAppointments(filters);
    response.setData(appointments);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getResumeAppointments = async () => {
  try {
    let response = new Response();
    const { daily, weekly, monthly } = await appointmentRepository.getResumeAppointments();
    let resumeAppointments = new ResumeAppointmentResponse();
    resumeAppointments.appointmentsDaily = daily;
    resumeAppointments.appointmentsWeekly = weekly;
    resumeAppointments.appointmentsMonthly = monthly;
    const appointmentsForMonth = await appointmentRepository.getAppointmentsForMonth();
    resumeAppointments.appointmentsForMonth = appointmentsForMonth;
    response.setData(resumeAppointments);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

exports.sendNotification = async (appointmentId) => {
  try {
    let response = new Response();
    const appointment = await appointmentRepository.getAppointmentById(appointmentId);
    
    if (!appointment) {
      response.addError('Appointment not found', 404);
      return response;
    }

    if (appointment.served) {
      response.addError('Appointment already served', 400);
      return response;
    }
    
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY });

    const responseMail = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: process.env.MAILGUN_MAIL_ENVIO_PRUEBA,
      to: [process.env.MAILGUN_MAIL_DESTINATARIO_PRUEBA],
      subject: "Recordatorio de cita médica | Clínica Veterinaria León",
      html: "<h1>Testing some awesomeness!</h1>"
    })
    .then(msg => msg)
    .catch(err => err);
    if(responseMail.status == 200) {
      response.setData({ message: 'Email notification sent successfully'});
    } else {
      response.addError('Error sending email', 500);
      return response;
    }
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

