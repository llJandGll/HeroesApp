import { useContext } from 'react';
import { PrivateRouteProps } from '../interfaces/PrivateRouteProps';
import { AuthContext } from '../auth/context';
import { Navigate, useLocation } from 'react-router';

export const PrivateRoute : React.FC<PrivateRouteProps>= ({ children }) => {

  const { authState } = useContext( AuthContext );
  const { logged } = authState;

  const { pathname, search } = useLocation();
  
  const lastPath = pathname + search;
  
  localStorage.setItem('lastPath', lastPath);
  
  return ( logged ? children : <Navigate to="/login" /> );
}
