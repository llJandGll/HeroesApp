import { User } from './User';
import { types } from '../types/types';

export type AuthAction =
  | { type: typeof types.login; payload: User }
  | { type: typeof types.logout; payload: User };

