class GenericResponse {
    constructor() {
        this.errors = [];
        this.data = null;
        this.code = 200;
    }

    hasErrors() {
        return this.errors.length > 0;
    }

    addError(error, code) {
        this.errors.push(error);
        this.code = code;
    }

    setData(data) {
        this.data = data;
    }
}

module.exports = GenericResponse;