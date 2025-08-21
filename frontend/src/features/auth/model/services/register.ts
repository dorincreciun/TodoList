import type {SchemaError, SchemaSuccess} from "../../../../shared/api/types/schema";

export const register = async (): Promise<SchemaSuccess | SchemaError> => {
    let success = true;
    let message = "Success";
    let data = {};

    return {
        success,
        message,
        data,
    }
}