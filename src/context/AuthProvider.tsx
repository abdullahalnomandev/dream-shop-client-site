import useFirebase from "hooks/useFirebase";
import React, { createContext } from "react";
interface IProps {
  token: string;
  error: string | null;
  googleSignIn: any;
  user: any;
  resetPassword: (email: string) => void;
  registerUser: (email: string, password: string, name: string) => void;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  isLoading: boolean;
  admin: boolean;
}

export const AuthContext = createContext({} as IProps);
export interface AuxProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuxProps) => {
  const allContext: IProps = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
