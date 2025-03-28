// _layout.tsx
import { Stack } from "expo-router";
//import { Ionicons } from "@expo/vector-icons";
//import { View } from "react-native";
import "../global.css";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      </Stack> 
  );
}