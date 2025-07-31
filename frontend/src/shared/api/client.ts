import type {paths} from "./schema.ts";
import createClient from "openapi-fetch";

export const client = createClient<paths>({ baseUrl: "https://todolist-rx9i.onrender.com/api/" });