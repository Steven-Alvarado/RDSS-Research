import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { AlertCircle, Camera, FileText, MapPin } from "lucide-react-native";
import { useState } from "react";

export default function ReportScreen() {
  const [reportType, setReportType] = useState<string | null>(null);
  
  const reportTypes = [
    { id: 'hazard', title: 'Hazard', icon: <AlertCircle size={24} color="#f59e0b" /> },
    { id: 'incident', title: 'Incident', icon: <AlertCircle size={24} color="#ef4444" /> },
    { id: 'information', title: 'Information', icon: <FileText size={24} color="#3b82f6" /> },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white shadow-sm px-4 py-4">
        <Text className="text-xl font-bold text-gray-900">Report</Text>
        <Text className="text-sm text-gray-500">Submit a new report</Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 p-4">
        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Report Type</Text>
          <View className="flex-row justify-between">
            {reportTypes.map((type) => (
              <TouchableOpacity 
                key={type.id}
                className={`bg-white p-4 rounded-xl shadow-sm flex-1 mx-1 items-center ${reportType === type.id ? 'border-2 border-blue-500' : ''}`}
                onPress={() => setReportType(type.id)}
              >
                {type.icon}
                <Text className="mt-2 text-sm font-medium">{type.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Details</Text>
          <View className="bg-white rounded-xl shadow-sm p-4">
            <TextInput
              placeholder="Enter description"
              multiline
              numberOfLines={4}
              className="min-h-20 text-gray-700"
            />
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Location</Text>
          <TouchableOpacity className="bg-white rounded-xl shadow-sm p-4 flex-row items-center">
            <MapPin size={20} color="#666" />
            <Text className="ml-2 text-gray-500">Add location</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Attachments</Text>
          <TouchableOpacity className="bg-white rounded-xl shadow-sm p-4 flex-row items-center justify-center border border-dashed border-gray-300">
            <Camera size={20} color="#666" />
            <Text className="ml-2 text-gray-500">Add photo or video</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-blue-600 py-3 rounded-xl items-center mb-6">
          <Text className="text-white font-medium">Submit Report</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
} 