import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

export default function Nav() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
