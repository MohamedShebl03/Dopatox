import useAuth from "../auth/Hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ isProtected = true }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <div>Loading...</div>;

  
  if (isProtected) {
    return isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/signin" state={{ from: location }} replace />
    );
  } else {
    return isAuthenticated ? (
      <Navigate to="/home" replace />
    ) : (
      <Outlet />
    );
  }
};

export default ProtectedRoutes;