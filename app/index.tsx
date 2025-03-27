import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AlertCircle, Activity, PhoneCall, Users, MapPin, ClipboardList, AlertTriangle, Info, Bell, User } from "lucide-react-native";

// Define valid route types
type AppRoute = "/" | "/alerts" | "/map" | "/messages" | "/menu";

export default function HomeScreen() {
  const router = useRouter();

  // Function to handle bottom tab navigation with proper typing
  const navigateToTab = (route: AppRoute) => {
    router.push(route);
  };

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
            <Bell size={20} color="#666" />
            <View className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          </TouchableOpacity>
          <TouchableOpacity className="p-1 bg-gray-200 rounded-full">
            <User size={20} color="#666" />
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
          <TouchableOpacity 
            className="w-full bg-red-600 text-white py-3 rounded-xl font-medium flex-row items-center justify-center mb-4 shadow-sm"
            onPress={() => router.push("/alerts")}
          >
            <AlertCircle size={18} color="#fff" />
            <Text className="text-white ml-2">Declare Emergency</Text>
          </TouchableOpacity>
          <View className="grid grid-cols-3 gap-3">
            <ActionButton icon={<Activity size={20} color="#3b82f6" />} label="Protocols" />
            <ActionButton 
              icon={<PhoneCall size={20} color="#3b82f6" />} 
              label="Contacts" 
            />
            <ActionButton 
              icon={<Users size={20} color="#3b82f6" />} 
              label="Teams" 
            />
            <ActionButton 
              icon={<MapPin size={20} color="#3b82f6" />} 
              label="Map" 
              onPress={() => router.push("/map")}
            />
            <ActionButton icon={<ClipboardList size={20} color="#3b82f6" />} label="Checklists" />
            <ActionButton icon={<Activity size={20} color="#3b82f6" />} label="Resources" />
          </View>
        </View>

        {/* Recent Alerts */}
        <View className="mb-16">
          <View className="flex-row justify-between mb-3">
            <Text className="text-sm font-medium text-gray-700">Recent Alerts</Text>
            <TouchableOpacity onPress={() => router.push("/alerts")}>
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
          <NavButton icon="home" label="Home" active={true} onPress={() => navigateToTab("/")} />
          <NavButton icon="alert-circle" label="Alerts" active={false} onPress={() => navigateToTab("/alerts")} />
          <NavButton icon="map" label="Map" active={false} onPress={() => navigateToTab("/map")} />
          <NavButton icon="chatbubbles" label="Messages" active={false} onPress={() => navigateToTab("/messages")} />
          <NavButton icon="menu" label="Menu" active={false} onPress={() => navigateToTab("/menu")} />
        </View>
      </View>
    </View>
  );
}

/* Status Card Component */
interface StatusCardProps {
  label: string;
  value: string;
  textColor?: string;
}

const StatusCard = ({ label, value, textColor = "text-gray-900" }: StatusCardProps) => (
  <View className="bg-gray-50 p-3 rounded-lg">
    <Text className="text-xs text-gray-500">{label}</Text>
    <Text className={`font-bold text-lg ${textColor}`}>{value}</Text>
  </View>
);

/* Action Button Component */
interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}

const ActionButton = ({ icon, label, onPress }: ActionButtonProps) => (
  <TouchableOpacity 
    className="flex flex-col items-center justify-center bg-white p-3 rounded-xl shadow-sm"
    onPress={onPress}
  >
    <View className="text-blue-600 mb-1">{icon}</View>
    <Text className="text-xs text-gray-700">{label}</Text>
  </TouchableOpacity>
);

/* Alert Item Component */
interface AlertItemProps {
  type: 'warning' | 'info';
  title: string;
  location: string;
  time: string;
}

const AlertItem = ({ type, title, location, time }: AlertItemProps) => {
  const Icon = type === "warning" ? AlertTriangle : Info;
  const bgColor = type === "warning" ? "bg-amber-100" : "bg-blue-100";
  const iconColor = type === "warning" ? "#f59e0b" : "#3b82f6";

  return (
    <View className="bg-white rounded-lg shadow-sm p-3 flex-row items-center">
      <View className={`p-2 rounded-full mr-3 ${bgColor}`}>
        <Icon size={18} color={iconColor} />
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
interface NavButtonProps {
  icon: any; // Using any for Ionicons names since the exact type is complex
  label: string;
  active: boolean;
  onPress?: () => void;
}

const NavButton = ({ icon, label, active, onPress }: NavButtonProps) => (
  <TouchableOpacity className="flex items-center" onPress={onPress}>
    <Ionicons name={icon} size={22} color={active ? "#007AFF" : "#666"} />
    <Text className={`text-xs mt-1 ${active ? "text-blue-600 font-medium" : "text-gray-500"}`}>{label}</Text>
  </TouchableOpacity>
);


