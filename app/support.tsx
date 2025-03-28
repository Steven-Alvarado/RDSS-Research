import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { BarChart, Clock, CheckCircle, AlertTriangle, FileText, AlertCircle } from "lucide-react-native";

export default function SupportScreen() {
  // Sample decision support data
  const recommendedActions = [
    { id: '1', title: 'Evacuate North Sector', priority: 'high', time: '15 min' },
    { id: '2', title: 'Deploy Medical Team Alpha', priority: 'medium', time: '30 min' },
    { id: '3', title: 'Secure Water Treatment Facility', priority: 'medium', time: '1 hr' },
  ];

  // Sample risk metrics
  const riskMetrics = [
    { id: '1', category: 'Infrastructure', level: 'Medium', value: 63 },
    { id: '2', category: 'Population', level: 'High', value: 82 },
    { id: '3', category: 'Resources', level: 'Low', value: 28 },
    { id: '4', category: 'Environment', level: 'Medium', value: 54 },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-white shadow-sm px-4 py-4">
        <Text className="text-xl font-bold text-gray-900">Decision Support</Text>
        <Text className="text-sm text-gray-500">Analysis and recommendations</Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 p-4">
        {/* Current Situation */}
        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Current Situation</Text>
          <View className="bg-white rounded-xl shadow-sm p-4">
            <View className="flex-row items-center mb-3">
              <View className="h-3 w-3 rounded-full bg-amber-500 mr-2" />
              <Text className="font-bold text-amber-500">Level 2 - Elevated Emergency</Text>
            </View>
            <Text className="text-gray-700 mb-3">
              Flooding reported in northern district with potential impacts to critical infrastructure and residential areas.
            </Text>
            <View className="flex-row justify-between">
              <View className="flex-row items-center">
                <Clock size={16} color="#666" />
                <Text className="text-xs text-gray-500 ml-1">Started: 3 hours ago</Text>
              </View>
              <TouchableOpacity>
                <Text className="text-xs text-blue-600 font-medium">View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Risk Assessment */}
        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Risk Assessment</Text>
          <View className="bg-white rounded-xl shadow-sm p-4">
            <View className="mb-4">
              {riskMetrics.map((metric) => (
                <View key={metric.id} className="mb-2">
                  <View className="flex-row justify-between mb-1">
                    <Text className="text-sm text-gray-700">{metric.category}</Text>
                    <Text className={`text-sm font-medium ${
                      metric.level === 'High' ? 'text-red-500' : 
                      metric.level === 'Medium' ? 'text-amber-500' : 'text-green-500'
                    }`}>{metric.level}</Text>
                  </View>
                  <View className="bg-gray-200 h-2 rounded-full overflow-hidden">
                    <View 
                      className={`h-full rounded-full ${
                        metric.level === 'High' ? 'bg-red-500' : 
                        metric.level === 'Medium' ? 'bg-amber-500' : 'bg-green-500'
                      }`} 
                      style={{ width: `${metric.value}%` }} 
                    />
                  </View>
                </View>
              ))}
            </View>
            <TouchableOpacity className="flex-row items-center justify-center">
              <BarChart size={16} color="#3b82f6" />
              <Text className="text-sm text-blue-600 font-medium ml-1">View Detailed Analysis</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recommended Actions */}
        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Recommended Actions</Text>
          <View className="bg-white rounded-xl shadow-sm overflow-hidden">
            {recommendedActions.map((action, index) => (
              <View 
                key={action.id} 
                className={`p-4 ${index < recommendedActions.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <View className="flex-row justify-between items-center mb-2">
                  <View className="flex-row items-center">
                    {action.priority === 'high' ? (
                      <AlertCircle size={18} color="#ef4444" />
                    ) : action.priority === 'medium' ? (
                      <AlertTriangle size={18} color="#f59e0b" />
                    ) : (
                      <CheckCircle size={18} color="#22c55e" />
                    )}
                    <Text className={`ml-2 font-medium ${
                      action.priority === 'high' ? 'text-red-500' : 
                      action.priority === 'medium' ? 'text-amber-500' : 'text-green-500'
                    }`}>
                      {action.priority.charAt(0).toUpperCase() + action.priority.slice(1)}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Clock size={16} color="#666" />
                    <Text className="text-xs text-gray-500 ml-1">ETA: {action.time}</Text>
                  </View>
                </View>
                <Text className="text-gray-800 font-medium">{action.title}</Text>
                <View className="flex-row justify-end mt-2">
                  <TouchableOpacity className="bg-blue-50 py-1 px-3 rounded-full">
                    <Text className="text-blue-600 text-xs">Implement</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Resources */}
        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-3">Resources & Procedures</Text>
          <TouchableOpacity className="bg-white rounded-xl shadow-sm p-4 flex-row items-center mb-2">
            <FileText size={20} color="#3b82f6" />
            <View className="ml-3 flex-1">
              <Text className="font-medium">Emergency Response Procedures</Text>
              <Text className="text-xs text-gray-500">Standard protocols for Level 2 emergency</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-xl shadow-sm p-4 flex-row items-center">
            <FileText size={20} color="#3b82f6" />
            <View className="ml-3 flex-1">
              <Text className="font-medium">Resource Allocation Guide</Text>
              <Text className="text-xs text-gray-500">Critical resource management during emergencies</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
} 