import type {
    SchemaError,
    SchemaLoginRequest,
    SchemaRegisterRequest, SchemaSuccess
} from "../../../../shared/api/types/schema";

/**
 * Reprezintă perechea de token-uri necesară pentru autentificarea utilizatorului.
 * - `accessToken` → folosit pentru accesarea resurselor protejate (durată scurtă de viață)
 * - `refreshToken` → folosit pentru obținerea unui nou access token (durată mai lungă de viață)
 */
type AuthTokens = {
    accessToken: string | null;
    refreshToken: string | null;
};

/**
 * Stările posibile ale autentificării utilizatorului:
 * - `idle` → aplicația încă verifică dacă utilizatorul este autentificat (stare inițială)
 * - `authenticated` → utilizatorul este logat și are acces la resursele protejate
 * - `unauthenticated` → utilizatorul nu este logat sau sesiunea a expirat
 */
type AuthStatus = 'idle' | 'authenticated' | 'unauthenticated';

/**
 * Stările posibile ale unei operațiuni de tip "fetch" pentru autentificare:
 * - `idle` → nu a început încă request-ul
 * - `loading` → request-ul este în desfășurare
 * - `success` → datele au fost primite cu succes
 * - `error` → a apărut o eroare în procesul de fetch
 */
type AuthFetchStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Starea globală a autentificării utilizatorului, stocată în store.
 */
export interface AuthStoreState {
    /**
     * Indică dacă utilizatorul este autentificat (`true`) sau nu (`false`).
     * Aceasta poate fi derivată din `authStatus`.
     */
    isAuthorized: boolean;

    /**
     * Starea actuală a autentificării.
     * Poate fi `idle`, `authenticated` sau `unauthenticated`.
     */
    authStatus: AuthStatus;

    /**
     * Starea actuală a unui request de autentificare sau reîmprospătare a token-ului.
     * Poate fi `idle`, `loading`, `success` sau `error`.
     */
    fetchStatus: AuthFetchStatus;

    /**
     * Token-urile de autentificare curente (access și refresh token).
     * Pot fi `null` dacă utilizatorul nu este logat.
     */
    tokens: AuthTokens;
}

export type AuthStoreActions = {
    update: () => Promise<SchemaSuccess | SchemaError>;
    logout: () => Promise<SchemaSuccess | SchemaError>;
    login: (data: SchemaLoginRequest) => Promise<SchemaSuccess | SchemaError>;
    register: (data: SchemaRegisterRequest) => Promise<SchemaSuccess | SchemaError>;
}

export type AuthStore = AuthStoreState & AuthStoreActions;