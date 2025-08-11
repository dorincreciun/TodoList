/**
 * Coduri HTTP de bază folosite pe partea de client.
 * Acoperă doar scenariile uzuale: succes, autentificare, erori frecvente.
 */
export const STATUS_CODES = {
    /* --- Succes --- */
    OK: 200,                 // Cererea a fost procesată cu succes
    CREATED: 201,            // Resursa a fost creată cu succes
    NO_CONTENT: 204,         // Cererea a fost procesată cu succes, dar fără conținut în răspuns

    /* --- Erori de la client --- */
    BAD_REQUEST: 400,        // Date invalide trimise la server sau cerere incorectă
    UNAUTHORIZED: 401,       // Lipsă token de autentificare sau token invalid
    FORBIDDEN: 403,          // Autentificat, dar fără permisiune pentru acțiunea solicitată
    NOT_FOUND: 404,          // Resursa solicitată nu a fost găsită
    UNPROCESSABLE_ENTITY: 422, // Erori de validare a datelor trimise
    CONFLICT: 409,           // Conflict cu starea curentă a resursei (ex: deja există)

    /* --- Erori de la server --- */
    INTERNAL_SERVER_ERROR: 500, // Eroare generală pe server
    SERVICE_UNAVAILABLE: 503    // Serverul este temporar indisponibil
} as const;

export const UNPROTECTED_ROUTES = [
    '/auth/login',
    '/auth/register',
    '/auth/logout',
    '/auth/refresh',
] as const


export type CodeStatus = typeof STATUS_CODES[keyof typeof STATUS_CODES]
export type UnprotectedRoute = typeof UNPROTECTED_ROUTES[number]