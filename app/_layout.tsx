// _layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import "../global.css";

export default function Layout() {
  return (
    <View className="flex-1 bg-white">
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#007AFF" }}>
        <Tabs.Screen 
          name="index" 
          options={{ title: "Home", tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} 
        />
        <Tabs.Screen 
          name="alerts" 
          options={{ title: "Alerts", tabBarIcon: ({ color }) => <Ionicons name="alert-circle" size={24} color={color} /> }} 
        />
        <Tabs.Screen 
          name="map" 
          options={{ title: "Map", tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} /> }} 
        />
        <Tabs.Screen 
          name="messages" 
          options={{ title: "Messages", tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={24} color={color} /> }} 
        />
        <Tabs.Screen 
          name="menu" 
          options={{ title: "Menu", tabBarIcon: ({ color }) => <Ionicons name="menu" size={24} color={color} /> }} 
        />
      </Tabs>
    </View>
  );
}

