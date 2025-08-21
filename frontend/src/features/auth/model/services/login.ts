import type {SchemaError, SchemaLoginRequest, SchemaSuccess} from "../../../../shared/api/types/schema";
import {client} from "../../../../shared/api/client";
import {STATUS_CODES} from "../../../../shared/api/types/enums";

export const login = async (credentials: SchemaLoginRequest): Promise<SchemaSuccess | SchemaError> => {
    try {
        const {response, data, error} = await client.POST('/auth/login', {
            body: credentials,
        })

        if (response.status === STATUS_CODES.OK && data) {
            return {
                success: data.success,
                message: data.message,
                data: data.data,
            }
        }else if(response.status === STATUS_CODES.UNAUTHORIZED && data){
            return {
                success: data.success,
                message: data.message,
            }
        }else if(response.status === STATUS_CODES.UNPROCESSABLE_ENTITY && error){
            return error
        }
        else {
            return {
                success: false,
                message: 'Eroare la logica "login"',
            }
        }

    } catch (e) {
        console.warn('Problema la logica "login": ' + e)
    }
}