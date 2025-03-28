// _layout.tsx
import {  Stack } from "expo-router";
//import { Ionicons } from "@expo/vector-icons";
//import { View } from "react-native";
import "../global.css";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="menu"
        options={{
          presentation: "modal",
          title: "Menu",
        }}
      />
      <Stack.Screen
        name="alerts"
        options={{
          presentation: "modal",
          title: "Alerts",
        }}
      />
      <Stack.Screen
        name="messages"
        options={{
          presentation: "modal",
          title: "Messages",
        }}
      />
    </Stack>
  );
}

