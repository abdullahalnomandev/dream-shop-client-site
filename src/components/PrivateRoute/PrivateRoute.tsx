import Login from "components/Login/Login";
import useAuth from "hooks/useAuth";
export interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
  const { user } = useAuth();
  return <>{user.email && user.emailVerified ? children : <Login />}</>;
};

export default PrivateRoute;
