require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./config/database');
const swaggerSpecs = require('./config/swagger');

// Importă rutele
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');

const app = express();

// Conectare la baza de date
connectDB();

// Middleware de securitate
app.use(helmet());

// Configurare CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minute
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limită de 100 de cereri per fereastră
  message: {
    success: false,
    message: 'Prea multe cereri de la această adresă IP, vă rugăm încercați din nou mai târziu.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

// Middleware pentru parsarea JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Middleware pentru logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Rute pentru API
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// Documentație Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Todo List API Documentation'
}));

// Ruta de health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Serverul funcționează corect',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Ruta pentru informații despre API
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Todo List API v1.0.0',
    documentation: '/api-docs',
    endpoints: {
      auth: '/api/auth',
      todos: '/api/todos',
      health: '/api/health'
    }
  });
});

// Middleware pentru gestionarea erorilor 404
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint-ul nu a fost găsit'
  });
});

// Middleware pentru gestionarea erorilor globale
app.use((error, req, res, next) => {
  console.error('Eroare server:', error);

  // Verifică dacă este o eroare de validare Mongoose
  if (error.name === 'ValidationError') {
    const errors = Object.values(error.errors).map(err => ({
      field: err.path,
      message: err.message,
      value: err.value
    }));

    return res.status(400).json({
      success: false,
      message: 'Eroare de validare',
      errors
    });
  }

  // Verifică dacă este o eroare de duplicare MongoDB
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue)[0];
    return res.status(400).json({
      success: false,
      message: `${field} există deja în baza de date`
    });
  }

  // Verifică dacă este o eroare de cast MongoDB
  if (error.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: 'ID invalid'
    });
  }

  // Eroare generică
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Eroare internă server' 
      : error.message
  });
});

// Configurare port
const PORT = process.env.PORT || 3000;

// Pornire server
app.listen(PORT, () => {
  console.log(`🚀 Serverul rulează pe portul ${PORT}`);
  console.log(`📚 Documentația API: http://localhost:${PORT}/api-docs`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
  console.log(`🌍 Mediu: ${process.env.NODE_ENV || 'development'}`);
});

// Gestionare închidere grațioasă
process.on('SIGTERM', () => {
  console.log('SIGTERM primit, închidere grațioasă...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT primit, închidere grațioasă...');
  process.exit(0);
});

module.exports = app; 