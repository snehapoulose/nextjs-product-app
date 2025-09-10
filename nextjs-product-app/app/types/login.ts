export enum RoleTypes {
  user = "user",
  admin = "admin",
}

export interface LoginFormData {
  email: string;
  password: string;
  role: RoleTypes;
}
