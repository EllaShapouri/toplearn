import { createContext } from "react";

export const context = createContext({
    fullname: "",
    setFullname: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    setPassword: () => {},
    policy: "",
    setPolicy: () => {},
    validator: null,
    handleRegister: () => {},
    handleLogin: () => {},
});
