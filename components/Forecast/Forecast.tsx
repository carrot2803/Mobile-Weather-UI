import { View, Text, Image } from "react-native";
import Stats from "./Stats";

export default function Forecast({ name, country, image, temp_c, cText, wind, humidity, sunrise }: string | any) {
	return (
		<View className="mx-4 flex justify-around flex-1 mb-2">
			<Text className="text-white text-center text-2xl font-bold">
				{name},<Text className="text-lg font-semibold text-gray-300">{country}</Text>
			</Text>
			<View className="flex-row justify-center">
				<Image source={image} className="w-52 h-52" />
			</View>
			<View className="space-y-2">
				<Text className="text-center font-bold text-white text-6xl ml-5">{temp_c}&#176;</Text>
				<Text className="text-center text-white text-xl tracking-widest">{cText}</Text>
			</View>
			<Stats wind={wind} humidity={humidity} sunrise={sunrise} />
		</View>
	);
}
