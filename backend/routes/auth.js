const express = require('express');
const { body } = require('express-validator');
const { auth } = require('../middleware/auth');
const validate = require('../middleware/validation');
const {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  changePassword
} = require('../controllers/authController');

const router = express.Router();

// Validare pentru înregistrare
const registerValidation = [
  body('username')
    .isLength({ min: 3, max: 30 })
    .withMessage('Username-ul trebuie să aibă între 3 și 30 de caractere')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username-ul poate conține doar litere, cifre și underscore'),
  body('email')
    .isEmail()
    .withMessage('Vă rugăm introduceți un email valid')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Parola trebuie să aibă cel puțin 6 caractere')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Parola trebuie să conțină cel puțin o literă mică, o literă mare și o cifră'),
  body('firstName')
    .isLength({ min: 2, max: 50 })
    .withMessage('Prenumele trebuie să aibă între 2 și 50 de caractere')
    .trim(),
  body('lastName')
    .isLength({ min: 2, max: 50 })
    .withMessage('Numele trebuie să aibă între 2 și 50 de caractere')
    .trim()
];

// Validare pentru login
const loginValidation = [
  body('email')
    .isEmail()
    .withMessage('Vă rugăm introduceți un email valid')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Parola este obligatorie')
];

// Validare pentru actualizare profil
const updateProfileValidation = [
  body('firstName')
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage('Prenumele trebuie să aibă între 2 și 50 de caractere')
    .trim(),
  body('lastName')
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage('Numele trebuie să aibă între 2 și 50 de caractere')
    .trim(),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Vă rugăm introduceți un email valid')
    .normalizeEmail()
];

// Validare pentru schimbare parolă
const changePasswordValidation = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Parola curentă este obligatorie'),
  body('newPassword')
    .isLength({ min: 6 })
    .withMessage('Parola nouă trebuie să aibă cel puțin 6 caractere')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Parola nouă trebuie să conțină cel puțin o literă mică, o literă mare și o cifră')
];

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Înregistrare utilizator nou
 *     tags: [Autentificare]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - firstName
 *               - lastName
 *             properties:
 *               username:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 30
 *                 pattern: '^[a-zA-Z0-9_]+$'
 *                 description: Username-ul utilizatorului
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email-ul utilizatorului
 *               password:
 *                 type: string
 *                 minLength: 6
 *                 pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)'
 *                 description: Parola (min 6 caractere, cel puțin o literă mică, mare și o cifră)
 *               firstName:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 description: Prenumele utilizatorului
 *               lastName:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 description: Numele utilizatorului
 *     responses:
 *       201:
 *         description: Utilizator înregistrat cu succes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *             example:
 *               success: true
 *               message: "Utilizator înregistrat cu succes"
 *               data:
 *                 user:
 *                   _id: "507f1f77bcf86cd799439011"
 *                   username: "john_doe"
 *                   email: "john@example.com"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   isActive: true
 *                   createdAt: "2023-01-01T00:00:00.000Z"
 *                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Date invalide
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/register', registerValidation, validate, register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentificare utilizator
 *     tags: [Autentificare]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email-ul utilizatorului
 *               password:
 *                 type: string
 *                 description: Parola utilizatorului
 *     responses:
 *       200:
 *         description: Autentificare reușită
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *             example:
 *               success: true
 *               message: "Autentificare reușită"
 *               data:
 *                 user:
 *                   _id: "507f1f77bcf86cd799439011"
 *                   username: "john_doe"
 *                   email: "john@example.com"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   isActive: true
 *                   lastLogin: "2023-01-01T00:00:00.000Z"
 *                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Credențiale invalide
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/login', loginValidation, validate, login);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Deconectare utilizator
 *     tags: [Autentificare]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Deconectare reușită
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       401:
 *         description: Token invalid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/logout', auth, logout);

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Obține profilul utilizatorului curent
 *     tags: [Profil]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profilul utilizatorului
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *             example:
 *               success: true
 *               data:
 *                 user:
 *                   _id: "507f1f77bcf86cd799439011"
 *                   username: "john_doe"
 *                   email: "john@example.com"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   isActive: true
 *                   lastLogin: "2023-01-01T00:00:00.000Z"
 *                   createdAt: "2023-01-01T00:00:00.000Z"
 *       401:
 *         description: Token invalid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/profile', auth, getProfile);

/**
 * @swagger
 * /auth/profile:
 *   put:
 *     summary: Actualizează profilul utilizatorului
 *     tags: [Profil]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 description: Prenumele utilizatorului
 *               lastName:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 description: Numele utilizatorului
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email-ul utilizatorului
 *     responses:
 *       200:
 *         description: Profil actualizat cu succes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       400:
 *         description: Date invalide
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Token invalid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/profile', auth, updateProfileValidation, validate, updateProfile);

/**
 * @swagger
 * /auth/change-password:
 *   put:
 *     summary: Schimbă parola utilizatorului
 *     tags: [Profil]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - currentPassword
 *               - newPassword
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 description: Parola curentă
 *               newPassword:
 *                 type: string
 *                 minLength: 6
 *                 pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)'
 *                 description: Parola nouă (min 6 caractere, cel puțin o literă mică, mare și o cifră)
 *     responses:
 *       200:
 *         description: Parolă schimbată cu succes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       400:
 *         description: Parolă curentă incorectă sau parolă nouă invalidă
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Token invalid
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/change-password', auth, changePasswordValidation, validate, changePassword);

module.exports = router; 