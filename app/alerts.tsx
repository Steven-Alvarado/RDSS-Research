import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AlertTriangle, ChevronLeft, Info, Clock } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function AlertsScreen() {
  const router = useRouter();
  
  // Sample alert data
  const alerts = [
    { id: '1', type: 'warning', title: 'Flash Flood Warning', location: 'Downtown Area', time: '10 min ago', message: 'Potential for flash flooding in low-lying areas. Residents should prepare to evacuate if necessary.' },
    { id: '2', type: 'info', title: 'Weather Advisory', location: 'Citywide', time: '45 min ago', message: 'Strong winds expected tonight. Secure loose items outdoors and be prepared for possible power outages.' },
    { id: '3', type: 'warning', title: 'Traffic Accident', location: 'Highway 101', time: '1 hr ago', message: 'Major accident blocking northbound lanes. Emergency services on scene. Expect delays of 30+ minutes.' },
    { id: '4', type: 'info', title: 'Planned Power Outage', location: 'North District', time: '2 hrs ago', message: 'Maintenance scheduled from 1-3am tomorrow. Please plan accordingly.' },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white shadow-sm px-4 py-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <ChevronLeft size={24} color="#666" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-gray-900">Alerts</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 p-4">
        <View className="space-y-3">
          {alerts.map(alert => (
            <View key={alert.id} className="bg-white rounded-lg shadow p-4 mb-2">
              <View className="flex-row items-center">
                <View className={`p-2 rounded-full mr-3 ${alert.type === 'warning' ? 'bg-amber-100' : 'bg-blue-100'}`}>
                  {alert.type === 'warning' ? (
                    <AlertTriangle size={18} color="#f59e0b" />
                  ) : (
                    <Info size={18} color="#3b82f6" />
                  )}
                </View>
                <View className="flex-1">
                  <Text className="font-semibold text-base">{alert.title}</Text>
                  <View className="flex-row items-center mt-1">
                    <Text className="text-xs text-gray-500 mr-3">{alert.location}</Text>
                    <Clock size={12} color="#9ca3af" />
                    <Text className="text-xs text-gray-400 ml-1">{alert.time}</Text>
                  </View>
                </View>
              </View>
              <Text className="mt-3 text-gray-700">{alert.message}</Text>
              <View className="flex-row justify-end mt-2">
                <TouchableOpacity className="bg-gray-100 py-1 px-3 rounded-full mr-2">
                  <Text className="text-gray-700 text-xs">Dismiss</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`py-1 px-3 rounded-full ${alert.type === 'warning' ? 'bg-amber-100' : 'bg-blue-100'}`}>
                  <Text className={`text-xs ${alert.type === 'warning' ? 'text-amber-700' : 'text-blue-700'}`}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
} 