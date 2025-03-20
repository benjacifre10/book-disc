let userAuthenticated = false;

export const checkAuth = () => userAuthenticated;

export const validateLogin = (email, password) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return {
      valid: false,
      message: "El email no es valido."
    };
  }

  if (password.length < 6) {
    return {
      valid: false,
      message: "La contraseña debe tener al menos 6 caracteres."
    };
  }

  return {
    valid: true
  };
}

export const login = (email, password) => {
  const validation = validateLogin(email, password);
  if (!validation.valid) {
    throw new Error(validation.message);
  }
  // aca deberia llamar al backend
  userAuthenticated = true;
};

export const logout = () => {
  // aca deberia llamar al backend
  userAuthenticated = false;
}

