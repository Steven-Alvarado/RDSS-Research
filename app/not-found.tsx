// 404 fallback page
import { View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-5xl font-bold text-gray-800">404</Text>
      <Text className="text-xl text-gray-600 mt-2">Oops! Page not found.</Text>
    </View>
  );
}

