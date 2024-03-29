const clientDb = require('./connectionDb');

exports.getAllAppointments = (filters) => {
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

  if (filters.served) {
    count++;
    query += ` AND Served = $${count}`;
    values.push(filters.served);
  }
  
  return new Promise((resolve, reject) => {
    clientDb.query(query, values, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  });
};

exports.getResumeAppointments = () => {
  const query = `SELECT 
                  COUNT(CASE WHEN DATE(AppointmentDate) = CURRENT_DATE THEN 1 END) AS daily,
                  COUNT(CASE WHEN DATE_PART('week', AppointmentDate) = DATE_PART('week', CURRENT_DATE) THEN 1 END) AS weekly,
                  COUNT(CASE WHEN DATE_PART('month', AppointmentDate) = DATE_PART('month', CURRENT_DATE) THEN 1 END) AS monthly
                FROM Appointments
  `;

  return new Promise((resolve, reject) => {
    clientDb.query(query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows[0]);
      }
    });
  });
}

exports.getAppointmentsForMonth = () => {
  const query = `SELECT 
                  COUNT(1),
                  to_char(AppointmentDate, 'Month') as month
                FROM Appointments
                GROUP BY to_char(AppointmentDate, 'Month');
  `;

  return new Promise((resolve, reject) => {
    clientDb.query(query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  });
}

exports.getAppointmentById = (id) => {
  const values = []
  const query = `SELECT Id, AppointmentDate, Served, PetName, PetDocument, OwnerMail FROM Appointments WHERE Id = $1`;
  values.push(id);

  return new Promise((resolve, reject) => {
    clientDb.query(query, values, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows[0]);
      }
    });
  });
}