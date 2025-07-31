const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo List API',
      version: '1.0.0',
      description: 'API pentru gestionarea unei aplicații Todo List cu autentificare JWT',
      contact: {
        name: 'API Support',
        email: 'support@todolist.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Server de dezvoltare'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'ID-ul unic al utilizatorului'
            },
            username: {
              type: 'string',
              description: 'Username-ul utilizatorului'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Email-ul utilizatorului'
            },
            firstName: {
              type: 'string',
              description: 'Prenumele utilizatorului'
            },
            lastName: {
              type: 'string',
              description: 'Numele utilizatorului'
            },
            isActive: {
              type: 'boolean',
              description: 'Statusul contului'
            },
            lastLogin: {
              type: 'string',
              format: 'date-time',
              description: 'Ultima conectare'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data creării contului'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data ultimei actualizări'
            }
          }
        },
        Todo: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'ID-ul unic al todo-ului'
            },
            title: {
              type: 'string',
              description: 'Titlul todo-ului'
            },
            description: {
              type: 'string',
              description: 'Descrierea todo-ului'
            },
            status: {
              type: 'string',
              enum: ['pending', 'in_progress', 'completed', 'cancelled'],
              description: 'Statusul todo-ului'
            },
            priority: {
              type: 'string',
              enum: ['low', 'medium', 'high', 'urgent'],
              description: 'Prioritatea todo-ului'
            },
            dueDate: {
              type: 'string',
              format: 'date-time',
              description: 'Data de scadență'
            },
            completedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data completării'
            },
            tags: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Tag-urile asociate todo-ului'
            },
            user: {
              $ref: '#/components/schemas/User',
              description: 'Utilizatorul care a creat todo-ul'
            },
            isPublic: {
              type: 'boolean',
              description: 'Dacă todo-ul este public'
            },
            isOverdue: {
              type: 'boolean',
              description: 'Dacă todo-ul este întârziat'
            },
            timeUntilDue: {
              type: 'string',
              description: 'Timpul rămas până la scadență'
            },
            progress: {
              type: 'number',
              description: 'Progresul todo-ului (0-100)'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data creării'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data ultimei actualizări'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              description: 'Mesajul de eroare'
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: {
                    type: 'string',
                    description: 'Câmpul cu eroare'
                  },
                  message: {
                    type: 'string',
                    description: 'Mesajul de eroare pentru câmp'
                  },
                  value: {
                    type: 'string',
                    description: 'Valoarea care a cauzat eroarea'
                  }
                }
              }
            }
          }
        },
        Success: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            message: {
              type: 'string',
              description: 'Mesajul de succes'
            },
            data: {
              type: 'object',
              description: 'Datele returnate'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js', './controllers/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = specs; 