import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Teste } from "../../screens/exampleInput";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Teste" component={Teste} />
    </Navigator>
  );
}
