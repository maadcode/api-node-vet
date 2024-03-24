const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

/**
 * @swagger
 * /appointment:
 *   get:
 *     summary: Obtener todos las citas médicas
 *     description: Obtener todos las citas médicas con los datos proporcionados en el cuerpo de la solicitud
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               breed:
 *                 type: string
 *               age:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Cita médica creada exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.get('/appointment', appointmentController.getAllAppointments);

module.exports = router;
