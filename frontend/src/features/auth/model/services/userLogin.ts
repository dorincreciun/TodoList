import { client } from "../../../../shared/api/client";
import { validateEmail } from "../../lib/validateEmail";
import { validatePassword } from "../../lib/validatePassword";
import type { AuthStoreState } from "../type/AuthStore";

export const userLogin = async (
    email: string,
    password: string,
    set: (partial: Partial<AuthStoreState>) => void
): Promise<void> => {
    try {
        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);

        if (!isValidEmail) {
            console.error("Email invalid");
            return;
        }

        if (!isValidPassword) {
            console.error("Parolă invalidă");
            return;
        }

        const response = await client.POST("/auth/login", {
            body: { email, password },
        });

        const { status } = response.response;
        const { accessToken, refreshToken } = response?.data?.data ?? {};

        if (status === 200 && accessToken && refreshToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            set({
                accessToken,
                refreshToken,
                isAuthorized: true,
            });
        } else {
            console.error("Login eșuat: răspuns invalid de la server");
        }

    } catch (error) {
        console.error("Eroare la login:", error);
    }
};
