require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swaggerConfig');
const bodyParser = require('body-parser');
const { loggerMiddleware } = require('./middlewares/loggerMiddleware');
const routes = require('./routing/routes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(loggerMiddleware);

// Rutas
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use(routes);

// Puerto de escucha
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
