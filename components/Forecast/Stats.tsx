import { View, Image, Text } from "react-native";

export default function Stats({ wind, humidity, sunrise }: string | any) {
	return (
		<View className="flex-row justify-between mx-4">
			<View className="flex-row space-x-2 items-center">
				<Image source={require("../../assets/icons/wind.png")} className="w-6 h-6" />
				<Text className="text-white font-semibold text-base">{wind}km</Text>
			</View>
			<View className="flex-row space-x-2 items-center">
				<Image source={require("../../assets/icons/drop.png")} className="w-6 h-6" />
				<Text className="text-white font-semibold text-base">{humidity}%</Text>
			</View>
			<View className="flex-row space-x-2 items-center">
				<Image source={require("../../assets/icons/sun.png")} className="w-6 h-6" />
				<Text className="text-white font-semibold text-base">{sunrise}</Text>
			</View>
		</View>
	);
}
