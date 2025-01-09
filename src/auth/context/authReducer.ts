import { AuthState } from "../interfaces";
import { AuthAction } from "../interfaces/AuthAction";
import { types } from "../types/types"




export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case types.login: 
      return {
        ...state,
        logged: true,
        user: action.payload
      }
      
    case types.logout: 
      return {
        ...state,
        logged: false,
        user: action.payload
      }
      
    default:
      return state;
  }
}