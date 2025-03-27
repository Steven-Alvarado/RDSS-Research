import { View, Text, FlatList } from "react-native";
import { MessageCircle } from "lucide-react-native";

// Sample message data
const messageData = [
  { id: '1', sender: 'Emergency Team', message: 'All team members please check in', time: '10:45 AM' },
  { id: '2', sender: 'Operations', message: 'Resources deployed to northern district', time: '09:32 AM' },
  { id: '3', sender: 'System', message: 'Daily safety check complete', time: 'Yesterday' },
];

export default function MessagesScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white shadow-sm px-4 py-4">
        <Text className="text-xl font-bold text-gray-900">Messages</Text>
      </View>

      {/* Content */}
      <FlatList
        className="flex-1"
        data={messageData}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center p-10">
            <MessageCircle size={48} color="#3b82f6" />
            <Text className="mt-4 text-gray-500">No messages yet</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View className="bg-white p-4 border-b border-gray-200">
            <View className="flex-row justify-between">
              <Text className="font-semibold">{item.sender}</Text>
              <Text className="text-xs text-gray-500">{item.time}</Text>
            </View>
            <Text className="mt-1 text-gray-700">{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
} 