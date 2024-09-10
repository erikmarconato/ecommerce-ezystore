import { Navigate, Outlet } from 'react-router-dom';
import useRole from './useRole';

interface ProtectedRouteProps {
  requiredRole: string | null;
}

function ProtectedRoute({ requiredRole }: ProtectedRouteProps) {
  const { role, loading } = useRole();

  if (loading) {
    return <div>Carregando...</div>; 
  }

  if (role === null) {
    return <Navigate to="/login" />;
  }

  if (role !== "Admin") {
    return <Navigate to="/nao-permitido" />;
  }

  return <Outlet />;
}


export default ProtectedRoute;
