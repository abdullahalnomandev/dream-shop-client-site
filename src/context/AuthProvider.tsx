import useFirebase from "hooks/useFirebase";
import React, { createContext } from "react";
interface IProps {
  error: string | null;
  googleSignIn: any;
  facebookSignIn: any;
  user: any;
  resetPassword: (email: string) => void;
  registerUser: (email: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  isLoading: boolean;
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
