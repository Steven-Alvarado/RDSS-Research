import { View, Text, ScrollView } from "react-native";
import { AlertTriangle } from "lucide-react-native";

export default function AlertsScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white shadow-sm px-4 py-4">
        <Text className="text-xl font-bold text-gray-900">Alerts</Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 p-4">
        <View className="bg-white rounded-lg shadow p-4 mb-4 flex-row items-center">
          <View className="bg-amber-100 p-3 rounded-full mr-3">
            <AlertTriangle size={24} color="#f59e0b" />
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold">No active alerts</Text>
            <Text className="text-sm text-gray-500">The system is currently monitoring for emergencies</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 