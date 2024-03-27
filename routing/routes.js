const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const petController = require('../controllers/petController');

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

/**
 * @swagger
 * /appointment/resumen:
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
router.get('/appointment/resumen', appointmentController.getResumeAppointments);

/**
 * @swagger
 * /appointment/resumen:
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
router.post('/appointment/notify', appointmentController.notifyAppointment);

/**
 * @swagger
 * /pet:
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
router.get('/pet', petController.getPet);

module.exports = router;
