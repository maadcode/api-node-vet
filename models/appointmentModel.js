class Appointment {
    constructor(appointmentDate, served, petName, petDocument, ownerMail) {
      this.appointmentDate = appointmentDate;
      this.served = served;
      this.petName = petName;
      this.petDocument = petDocument;
      this.ownerMail = ownerMail;
    }
}
  
module.exports = Appointment;
  