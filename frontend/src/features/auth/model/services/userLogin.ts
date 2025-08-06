import {validateEmail} from "../../../../shared/lib/validateEmail.ts";

export const userLogin = async (email: string, password: string) => {
    const isValidEmail = validateEmail(email)
    const isValidPassword = validateEmail(password)

    if(!isValidPassword || !isValidEmail) {
        console.log('Invalid password')
    }
}