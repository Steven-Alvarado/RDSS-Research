import { View, Text } from "react-native";
import { MapPin } from "lucide-react-native";

export default function MapScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white shadow-sm px-4 py-4">
        <Text className="text-xl font-bold text-gray-900">Map</Text>
      </View>

      {/* Content */}
      <View className="flex-1 justify-center items-center p-4">
        <View className="bg-blue-100 p-6 rounded-full mb-4">
          <MapPin size={48} color="#3b82f6" />
        </View>
        <Text className="text-lg font-semibold text-center">Map Feature Coming Soon</Text>
        <Text className="text-sm text-gray-500 text-center mt-2">
          Interactive map with emergency points will be available in the next update
        </Text>
      </View>
    </View>
  );
} 