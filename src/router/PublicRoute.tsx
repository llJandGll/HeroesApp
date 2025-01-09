import React, { useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate } from "react-router";
import { PublicRouteProps } from "../interfaces/PublicRouteProps";

export const PublicRoute : React.FC<PublicRouteProps> = ({ children }) => {

  const { logged } = useContext( AuthContext);

  return ( !logged ) ? children : <Navigate to="/" />
}
