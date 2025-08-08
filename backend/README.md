# Todo List API

Un server REST API complet pentru gestionarea unei aplicații Todo List cu autentificare JWT și baza de date MongoDB.

## 🚀 Funcționalități

### Autentificare și Utilizatori
- ✅ Înregistrare utilizator nou
- ✅ Autentificare cu JWT (Access Token + Refresh Token)
- ✅ Reîmprospătare automată a token-ului de acces
- ✅ Deconectare utilizator
- ✅ Gestionare profil utilizator
- ✅ Schimbare parolă
- ✅ Validare date de intrare

### Gestionare Todo-uri
- ✅ Creare todo nou
- ✅ Listare todo-uri cu filtrare avansată
- ✅ Obținere todo specific
- ✅ Actualizare todo
- ✅ Ștergere todo
- ✅ Marcare todo ca completat/în progres/anulat
- ✅ Filtrare după dată (azi, săptămâna aceasta, 2 săptămâni, luna aceasta, întârziat)
- ✅ Filtrare după status și prioritate
- ✅ Căutare în titlu și descriere
- ✅ Paginare și sortare
- ✅ Statistici pentru todo-uri

### Funcționalități Suplimentare
- ✅ Documentație API completă cu Swagger
- ✅ Rate limiting pentru securitate
- ✅ Validare date robustă
- ✅ Gestionare erori avansată
- ✅ Logging pentru debugging
- ✅ CORS configurat
- ✅ Middleware de securitate (Helmet)

## 🛠️ Tehnologii Utilizate

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Baza de date NoSQL
- **Mongoose** - ODM pentru MongoDB
- **JWT** - Autentificare stateless
- **bcryptjs** - Hash parole
- **express-validator** - Validare date
- **Swagger** - Documentație API
- **Helmet** - Securitate
- **CORS** - Cross-origin resource sharing

## 📋 Cerințe Sistem

- Node.js (v14 sau mai nou)
- MongoDB (v4.4 sau mai nou)
- npm sau yarn

## 🔧 Instalare și Configurare

### 1. Clonează repository-ul
```bash
git clone <repository-url>
cd todo-list-backend
```

### 2. Instalează dependențele
```bash
npm install
```

### 3. Configurează variabilele de mediu
Creează un fișier `.env` în directorul rădăcină:
```bash
cp env.example .env.development
```

Editează fișierul `.env` cu configurațiile tale:
```env
# Configurare Server
PORT=3000
NODE_ENV=development

# Configurare MongoDB
MONGODB_URI=mongodb://localhost:27017/todo-list

# Configurare JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-change-this-in-production
JWT_REFRESH_EXPIRES_IN=7d

# Configurare Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 4. Pornește MongoDB
Asigură-te că MongoDB rulează pe sistemul tău:
```bash
# Pe Windows
net start MongoDB

# Pe macOS cu Homebrew
brew services start mongodb-community

# Pe Linux
sudo systemctl start mongod
```

### 5. Pornește serverul
```bash
# Mod development (cu nodemon)
npm run dev

# Mod production
npm start
```

Serverul va rula pe `http://localhost:3000`

## 📚 Documentația API

Documentația completă a API-ului este disponibilă la:
- **Swagger UI**: `http://localhost:3000/api-docs`
- **API Info**: `http://localhost:3000/api`

## 🔌 Endpoint-uri API

### Autentificare
| Metodă | Endpoint | Descriere |
|--------|----------|-----------|
| POST | `/api/auth/register` | Înregistrare utilizator nou |
| POST | `/api/auth/login` | Autentificare utilizator |
| POST | `/api/auth/logout` | Deconectare utilizator |
| GET | `/api/auth/profile` | Obține profilul utilizatorului |
| PUT | `/api/auth/profile` | Actualizează profilul utilizatorului |
| PUT | `/api/auth/change-password` | Schimbă parola |

### Todo-uri
| Metodă | Endpoint | Descriere |
|--------|----------|-----------|
| POST | `/api/todos` | Creează todo nou |
| GET | `/api/todos` | Lista todo-uri cu filtrare |
| GET | `/api/todos/stats` | Statistici todo-uri |
| GET | `/api/todos/:id` | Obține todo specific |
| PUT | `/api/todos/:id` | Actualizează todo |
| DELETE | `/api/todos/:id` | Șterge todo |
| PATCH | `/api/todos/:id/complete` | Marchează ca completat |
| PATCH | `/api/todos/:id/progress` | Marchează ca în progres |
| PATCH | `/api/todos/:id/cancel` | Anulează todo |

### Utilitare
| Metodă | Endpoint | Descriere |
|--------|----------|-----------|
| GET | `/api/health` | Health check |
| GET | `/api` | Informații API |

## 🔍 Exemple de Utilizare

### Înregistrare utilizator
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "Password123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Autentificare
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "Password123"
  }'
```

### Creare todo
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Cumpără pâine",
    "description": "Nu uita să cumpăr pâine de la magazin",
    "priority": "medium",
    "dueDate": "2023-12-31T23:59:59.000Z",
    "tags": ["cumpărături", "alimente"]
  }'
```

### Listare todo-uri cu filtrare
```bash
curl -X GET "http://localhost:3000/api/todos?status=pending&priority=high&dateFilter=today&page=1&limit=10" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🗂️ Structura Proiectului

```
backend/
├── config/
│   ├── database.js          # Configurare MongoDB
│   └── swagger.js           # Configurare Swagger
├── controllers/
│   ├── authController.js    # Logică autentificare
│   └── todoController.js    # Logică todo-uri
├── middleware/
│   ├── auth.js              # Middleware autentificare
│   └── validation.js        # Middleware validare
├── models/
│   ├── User.js              # Model utilizator
│   └── Todo.js              # Model todo
├── routes/
│   ├── auth.js              # Rute autentificare
│   └── todos.js             # Rute todo-uri
├── .env.example             # Exemplu variabile mediu
├── package.json             # Dependențe și scripturi
├── README.md                # Documentația
└── server.js                # Server principal
```

## 🔒 Securitate

- **JWT Authentication** - Autentificare stateless sigură cu Access Token și Refresh Token
- **Password Hashing** - Parole hash-uite cu bcrypt
- **Rate Limiting** - Protecție împotriva atacurilor brute force
- **Input Validation** - Validare strictă a datelor de intrare
- **CORS** - Configurare securizată pentru cross-origin requests
- **Helmet** - Headers de securitate HTTP
- **Error Handling** - Gestionare sigură a erorilor

## 🔐 Sistemul de Token-uri

### Access Token
- **Durată**: 15 minute (configurabilă prin `JWT_EXPIRES_IN`)
- **Utilizare**: Pentru autentificarea la API endpoints
- **Securitate**: Durată scurtă pentru a minimiza riscul în caz de compromitere

### Refresh Token
- **Durată**: 7 zile (configurabilă prin `JWT_REFRESH_EXPIRES_IN`)
- **Utilizare**: Pentru obținerea unui nou access token
- **Securitate**: Stocat în mod sigur pe client (httpOnly cookie recomandat)

### Flux de Autentificare
1. **Login/Register**: Utilizatorul primește atât access token cât și refresh token
2. **API Requests**: Access token-ul este folosit pentru autentificarea la endpoints
3. **Token Expirat**: Când access token-ul expiră, clientul folosește refresh token-ul pentru a obține unul nou
4. **Refresh Endpoint**: `POST /auth/refresh` - primește refresh token și returnează un nou access token

## 🧪 Testare

Pentru a rula testele:
```bash
npm test
```

## 📊 Filtrare și Căutare

### Filtrare după dată
- `today` - Todo-uri pentru astăzi
- `week` - Todo-uri pentru săptămâna aceasta
- `two_weeks` - Todo-uri pentru următoarele 2 săptămâni
- `month` - Todo-uri pentru luna aceasta
- `overdue` - Todo-uri întârziate

### Filtrare după status
- `pending` - În așteptare
- `in_progress` - În progres
- `completed` - Completat
- `cancelled` - Anulat

### Filtrare după prioritate
- `low` - Prioritate mică
- `medium` - Prioritate medie
- `high` - Prioritate mare
- `urgent` - Prioritate urgentă

## 🚀 Deployment

### Pentru producție:

1. Setează `NODE_ENV=production`
2. Configurează o cheie JWT_SECRET sigură
3. Configurează MONGODB_URI pentru baza de date de producție
4. Ajustează CORS pentru domeniul tău
5. Configurează rate limiting pentru producție

### Exemplu configurare producție:
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://your-production-db:27017/todo-list
JWT_SECRET=your-super-secure-production-jwt-secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-super-secure-production-refresh-secret
JWT_REFRESH_EXPIRES_IN=7d
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=50
```

## 🤝 Contribuții

1. Fork repository-ul
2. Creează o branch pentru feature (`git checkout -b feature/AmazingFeature`)
3. Commit schimbările (`git commit -m 'Add some AmazingFeature'`)
4. Push la branch (`git push origin feature/AmazingFeature`)
5. Deschide un Pull Request

## 📝 Licență

Acest proiect este licențiat sub licența MIT - vezi fișierul [LICENSE](LICENSE) pentru detalii.

## 🆘 Suport

Pentru întrebări sau probleme:
- Deschide un issue pe GitHub
- Contactează echipa de dezvoltare

## 🔄 Versiuni

- **v1.0.0** - Versiunea inițială cu toate funcționalitățile de bază 