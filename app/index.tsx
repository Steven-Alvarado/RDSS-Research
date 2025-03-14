import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AlertCircle, Activity, PhoneCall, Users, MapPin, ClipboardList, AlertTriangle, Info, Bell, User } from "lucide-react";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3 flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-bold text-gray-900">Emergency Support</Text>
          <Text className="text-xs text-green-600 font-medium">System Online</Text>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity className="relative p-1 rounded-full text-gray-600">
            <Bell size={20} />
            <View className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          </TouchableOpacity>
          <TouchableOpacity className="p-1 bg-gray-200 rounded-full">
            <User size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1 px-4 py-4">
        
        {/* Status Dashboard */}
        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Current Status</Text>
          <View className="bg-white rounded-xl shadow-sm p-4">
            <View className="flex-row justify-between items-center mb-4">
              <View>
                <Text className="text-sm text-gray-500">Alert Level</Text>
                <Text className="font-bold text-amber-500">Level 2 - Elevated</Text>
              </View>
              <View className="h-10 w-10 bg-amber-100 flex items-center justify-center rounded-full">
                <View className="h-6 w-6 bg-amber-500 rounded-full" />
              </View>
            </View>
            <View className="grid grid-cols-2 gap-4">
              <StatusCard label="Active Incidents" value="3" />
              <StatusCard label="Response Teams" value="5" />
              <StatusCard label="Resources Available" value="80%" />
              <StatusCard label="Communication" value="Online" textColor="text-green-600" />
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Quick Actions</Text>
          <TouchableOpacity className="w-full bg-red-600 text-white py-3 rounded-xl font-medium flex-row items-center justify-center mb-4 shadow-sm">
            <AlertCircle size={18} className="mr-2 text-white" />
            <Text className="text-white">Declare Emergency</Text>
          </TouchableOpacity>
          <View className="grid grid-cols-3 gap-3">
            <ActionButton icon={<Activity size={20} />} label="Protocols" />
            <ActionButton icon={<PhoneCall size={20} />} label="Contacts" />
            <ActionButton icon={<Users size={20} />} label="Teams" />
            <ActionButton icon={<MapPin size={20} />} label="Map" />
            <ActionButton icon={<ClipboardList size={20} />} label="Checklists" />
            <ActionButton icon={<Activity size={20} />} label="Resources" />
          </View>
        </View>

        {/* Recent Alerts */}
        <View className="mb-16">
          <View className="flex-row justify-between mb-3">
            <Text className="text-sm font-medium text-gray-700">Recent Alerts</Text>
            <TouchableOpacity>
              <Text className="text-xs text-blue-600 font-medium">View All</Text>
            </TouchableOpacity>
          </View>
          <View className="space-y-3">
            <AlertItem type="warning" title="Flash Flood Warning" location="Downtown Area" time="10 min ago" />
            <AlertItem type="info" title="Weather Advisory" location="Citywide" time="45 min ago" />
            <AlertItem type="warning" title="Traffic Accident" location="Highway 101" time="1 hr ago" />
          </View>
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <View className="flex-row justify-around py-2">
          <NavButton icon="home" label="Home" active />
          <NavButton icon="alert-circle" label="Alerts" />
          <NavButton icon="map" label="Map" />
          <NavButton icon="chatbubbles" label="Messages" />
          <NavButton icon="menu" label="Menu" />
        </View>
      </View>
    </View>
  );
}

/* Status Card Component */
const StatusCard = ({ label, value, textColor = "text-gray-900" }) => (
  <View className="bg-gray-50 p-3 rounded-lg">
    <Text className="text-xs text-gray-500">{label}</Text>
    <Text className={`font-bold text-lg ${textColor}`}>{value}</Text>
  </View>
);

/* Action Button Component */
const ActionButton = ({ icon, label }) => (
  <TouchableOpacity className="flex flex-col items-center justify-center bg-white p-3 rounded-xl shadow-sm">
    <View className="text-blue-600 mb-1">{icon}</View>
    <Text className="text-xs text-gray-700">{label}</Text>
  </TouchableOpacity>
);

/* Alert Item Component */
const AlertItem = ({ type, title, location, time }) => {
  const Icon = type === "warning" ? AlertTriangle : Info;
  const bgColor = type === "warning" ? "bg-amber-100" : "bg-blue-100";
  const iconColor = type === "warning" ? "text-amber-500" : "text-blue-500";

  return (
    <View className="bg-white rounded-lg shadow-sm p-3 flex-row items-center">
      <View className={`p-2 rounded-full mr-3 ${bgColor}`}>
        <Icon size={18} className={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="text-sm font-medium text-gray-900">{title}</Text>
        <Text className="text-xs text-gray-500">{location}</Text>
      </View>
      <Text className="text-xs text-gray-400">{time}</Text>
    </View>
  );
};

/* Bottom Navigation Button */
const NavButton = ({ icon, label, active }) => (
  <TouchableOpacity className="flex items-center">
    <Ionicons name={icon} size={22} color={active ? "#007AFF" : "#666"} />
    <Text className={`text-xs mt-1 ${active ? "text-blue-600 font-medium" : "text-gray-500"}`}>{label}</Text>
  </TouchableOpacity>
);


