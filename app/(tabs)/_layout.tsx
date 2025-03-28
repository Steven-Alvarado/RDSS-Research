import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Report",
          tabBarIcon: ({ color }) => <Ionicons name="alert-circle" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "Decision Support",
          tabBarIcon: ({ color }) => <Ionicons name="analytics" size={24} color={color} />
        }}
      />
    </Tabs>
  );
} 