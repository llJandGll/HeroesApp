import { User } from "./User";

export interface AuthState {
  logged: boolean;
  user: User;
}