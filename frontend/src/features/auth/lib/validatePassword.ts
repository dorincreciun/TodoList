export function validatePassword(password: string): {
    valid: boolean;
    errors: string[];
} {
    const errors: string[] = [];

    if (password.length < 4) {
        errors.push("Parola trebuie să conțină cel puțin 4 caractere.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Parola trebuie să conțină cel puțin o literă mare (A-Z).");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Parola trebuie să conțină cel puțin o literă mică (a-z).");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Parola trebuie să conțină cel puțin o cifră (0-9).");
    }

    if (/\s/.test(password)) {
        errors.push("Parola nu trebuie să conțină spații.");
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}
