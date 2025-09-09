export interface LoginFormData {
    email:string;
    password:string;
    role:"admin" | "user";
}