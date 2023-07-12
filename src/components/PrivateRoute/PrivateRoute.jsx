import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  const token = useSelector(state => state.token);

  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
