import { createContext } from "react";

const defaultValues={
    isLoggedIn: false,
};

type AuthContextType = typeof defaultValues;

export const AuthContext = createContext<AuthContextType>(defaultValues);

// AuthContext.Provider