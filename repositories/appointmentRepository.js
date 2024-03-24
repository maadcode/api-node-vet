const clientDb = require('./connectionDb');

exports.getAllAppointments = (filters) => {
  return new Promise((resolve, reject) => {
    const values = []
    let count = 0;
    let query = 'SELECT Id, AppointmentDate, Served, PetName, PetDocument, OwnerMail FROM Appointments WHERE true';

    if (filters.dateFrom) {
      count++;
      query += ` AND AppointmentDate >= $${count}`;
      values.push(filters.dateFrom);
    }

    if (filters.dateUntil) {
      count++;
      query += ` AND AppointmentDate <= $${count}`;
      values.push(filters.dateUntil);
    }

    clientDb.query(query, values, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  });
};

