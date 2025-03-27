import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Settings, FileText, HelpCircle, LogOut, User, Shield } from "lucide-react-native";

export default function MenuScreen() {
  const menuItems = [
    { icon: <User size={20} color="#666" />, title: "Profile", description: "View and edit your profile" },
    { icon: <Settings size={20} color="#666" />, title: "Settings", description: "App preferences and notifications" },
    { icon: <Shield size={20} color="#666" />, title: "Security", description: "Security settings and permissions" },
    { icon: <FileText size={20} color="#666" />, title: "Documentation", description: "Manuals and guides" },
    { icon: <HelpCircle size={20} color="#666" />, title: "Help & Support", description: "Get assistance" },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white shadow-sm px-4 py-4">
        <Text className="text-xl font-bold text-gray-900">Menu</Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 p-4">
        <View className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index}
              className={`p-4 flex-row items-center ${index < menuItems.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <View className="mr-4">{item.icon}</View>
              <View className="flex-1">
                <Text className="font-medium text-gray-900">{item.title}</Text>
                <Text className="text-xs text-gray-500">{item.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity className="flex-row items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
          <LogOut size={20} color="#f43f5e" />
          <Text className="ml-4 text-red-500 font-medium">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
} 