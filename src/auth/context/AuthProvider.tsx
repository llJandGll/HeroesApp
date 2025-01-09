import { useReducer, useCallback } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { AuthState, User } from "../interfaces"
import { types } from "../types/types"
import { PrivateRouteProps } from '../interfaces/PrivateRouteProps';



export const AuthProvider: React.FC<PrivateRouteProps> = ({ children }) => {
  const initialState: AuthState = {
    logged: false,
    user: {
      email: '',
      password: ''
    }
  }

  const initializeState = (): AuthState => {
    try {
      const storedUser = localStorage.getItem('user');
      
      if (!storedUser) return initialState;
      
      const parsedUser = JSON.parse(storedUser) as User;
      
      if (!parsedUser?.email || !parsedUser?.password) {
        return initialState;
      }

      return {
        logged: true,
        user: parsedUser
      };
      
    } catch (error) {
      console.error('Error initializing auth state:', error);
      return initialState;
    }
  }

  const [authState, dispatch] = useReducer(authReducer, initialState, initializeState);

  const onLogin = useCallback((email: string, password: string) => {
    const user: User = { email, password };
    
    try {
      localStorage.setItem('user', JSON.stringify(user));
      
      dispatch({
        type: types.login,
        payload: user
      });
    } catch (error) {
      console.error('Error during login:', error);
    }
  }, []);

  const onLogout = useCallback(() => {
    try {
      localStorage.removeItem('user');
      
      dispatch({
        type: types.logout,
        payload: {
          email: '',
          password: ''
        }
      });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      authState,
      ...authState,
      onLogin,
      onLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

