import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import NotificationScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";
const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: () => {
							return;
						},
					}}
				/>
				<Tab.Screen name="Notifications" component={NotificationScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
