import type {paths} from "./schema.ts";
import createClient from "openapi-fetch";

export const client = createClient<paths>({ baseUrl: import.meta.env.VITE_API_URL });