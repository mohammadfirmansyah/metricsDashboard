import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BarChart, PieChart, ProgressChart } from 'react-native-chart-kit';
import { LineChart } from 'react-native-gifted-charts';
import axios from 'axios';

const screenWidth = Dimensions.get("window").width;
const Tab = createBottomTabNavigator();

// Screen 1: Daily Usage with Line Chart
function DailyUsageScreen() {
  const [dailyUsageData, setDailyUsageData] = useState({ values: [], labels: [] });

  // Fetch daily usage metrics from API
  const fetchDailyUsageMetrics = async () => {
    try {
      const response = await axios.get('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/ZA40HNE2G0l7ZUgnq5VO4Q/dataoveraweek.json');
      setDailyUsageData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDailyUsageMetrics();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily App Usage</Text>
      <LineChart
        data={dailyUsageData.values}
        width={300}
        height={200}
        initialSpacing={20}
        color="#1e90ff"
        thickness={2}
        hideDataPoints={false}
        dataPointsColor="#ff6347"
        dataPointsRadius={4}
        startFillColor="#add8e6"
        endFillColor="#ffffff"
        startOpacity={0.8}
        endOpacity={0.1}
        curved={true}
        showVerticalLines={true}
        verticalLinesColor="rgba(0, 0, 0, 0.1)"
        showYAxisIndices={true}
        yAxisColor="rgba(0, 0, 0, 0.1)"
        xAxisLabelTextStyle={styles.labelTextStyle}
        yAxisLabelTextStyle={styles.labelTextStyle}
        yAxisTextStyle={{ color: '#333', fontSize: 12 }}
        xAxisThickness={1}
        xAxisColor="black"
        xAxisLabelTexts={dailyUsageData.labels}
      />
    </View>
  );
}

// Screen 2: Weekly Usage with Bar Chart
function WeeklyUsageScreen() {
  const [weeklyUsageData, setWeeklyUsageData] = useState({ labels: [], datasets: [{ data: [] }] });

  // Fetch weekly usage data from API
  const fetchWeeklyUsageData = async () => {
    try {
      const response = await axios.get('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/4vOv2DroCvrpvIqvHjRq3w/weeklydata.json');
      setWeeklyUsageData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchWeeklyUsageData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Usage</Text>
      <BarChart
        data={weeklyUsageData}
        width={screenWidth - 32}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        showValuesOnTopOfBars={true}
        fromZero={true}
        chartConfig={{
          backgroundGradientFrom: "#8ccf9e",
          backgroundGradientTo: "#8ccf9e",
          decimalPlaces: 0,
          color: (opacity = 0) => `rgba(0, 0, 0, 1)`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
}

// Screen 3: Category Usage with Pie Chart
function CategoryScreen() {
  const [categoryData, setCategoryData] = useState([{}]);

  // Fetch category data and assign random colors
  const fetchCategoryData = async () => {
    try {
      const response = await axios.get('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/Q4E2g7pKaK__9XII3C1GEQ/socialmedia.json');

      // Generate random hex color for each category
      let getRandomHexColor = () => {
        const randomNum = Math.floor(Math.random() * 16777215);
        return `#${randomNum.toString(16).padStart(6, "0")}`;
      };

      let dataRetrieved = response.data;
      dataRetrieved.map(data => {
        data.color = getRandomHexColor();
        data.legendFontColor = "#7F7F7F";
        data.legendFontSize = 12;
      });
      setCategoryData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Usage by Category</Text>
      <PieChart
        data={categoryData}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
}

// Screen 4: Features Progress with Progress Chart
function FeaturesScreen() {
  const [featuresData, setFeaturesData] = useState({ labels: [], data: [] });

  // Fetch features completion progress data
  const fetchfeaturesData = async () => {
    try {
      const response = await axios.get('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/tY7RUI7a7CsHkyatn10gJQ/progress-chart%20-1-');
      setFeaturesData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchfeaturesData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feature Completion Progress</Text>
      <ProgressChart
        data={featuresData}
        width={screenWidth - 32}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2,
          barPercentage: 0.5,
          useShadowColorFromDataset: false,
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
}

// Main App Component with Bottom Tab Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#1e90ff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#f8f8f8' },
          headerStyle: { backgroundColor: '#1e90ff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Tab.Screen 
          name="Daily" 
          component={DailyUsageScreen}
          options={{ tabBarLabel: 'Daily' }}
        />
        <Tab.Screen 
          name="Weekly" 
          component={WeeklyUsageScreen}
          options={{ tabBarLabel: 'Weekly' }}
        />
        <Tab.Screen 
          name="Category" 
          component={CategoryScreen}
          options={{ tabBarLabel: 'Category' }}
        />
        <Tab.Screen 
          name="Features" 
          component={FeaturesScreen}
          options={{ tabBarLabel: 'Features' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  labelTextStyle: {
    color: '#333',
    fontSize: 10,
  },
});