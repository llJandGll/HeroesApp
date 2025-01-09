import { AuthState } from './AuthState';

export interface AuthContextProps extends AuthState {
  authState: AuthState;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
} 

