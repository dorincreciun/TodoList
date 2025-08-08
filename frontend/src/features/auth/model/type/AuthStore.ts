export type AuthStoreState = {
    isAuthorized: boolean;

    accessToken: string | null;
    refreshToken: string | null;
}

export type AuthStoreActions = {
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;

    update: () => Promise<boolean>;
    logout: () => void;
}