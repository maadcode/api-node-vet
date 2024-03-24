const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Veterinaria Leon',
      version: '1.0.0',
      description: 'Una API para administrar citas médicas en la Veterinaria Leon.',
    },
  },
  apis: ['./routing/routes.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
