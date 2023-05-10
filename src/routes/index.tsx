import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./AuthRoutes/auth.stack.routes";
// import { useAuthContext } from "../hooks/UseAuthContext";

export function Routes() {
  // const { user } = useAuthContext();
  return (
    <NavigationContainer>
      {/* {user ? <AuthRoutes /> : <AppStackRoutes />} */}
      <AuthRoutes />
    </NavigationContainer>
  );
}

export default Routes;
