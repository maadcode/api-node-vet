class FilterAppointmentRequest {
    constructor(dateFrom, dateUntil, served) {
        this.dateFrom = dateFrom;
        this.dateUntil = dateUntil;
        this.served = served;
    }
}

module.exports = FilterAppointmentRequest;