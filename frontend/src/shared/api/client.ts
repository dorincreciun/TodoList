import type {paths} from "./types/schema.ts";
import createClient from "openapi-fetch";
import {authMiddleware} from "./middleware/authMiddleware";

export const client = createClient<paths>({ baseUrl: import.meta.env.VITE_API_URL });

/* Middleware */
client.use(authMiddleware)