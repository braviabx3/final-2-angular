export interface ModelLoginForm {
  email: string,
  password: string
}

export interface ModelRegisterForm {
  email: string,
  password: string,
  confirmPassword: string
}

export interface ModelRecoverForm {
  email: string
}
