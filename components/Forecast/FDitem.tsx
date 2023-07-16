import { View, Text, Image } from "react-native";
import React from "react";
import { theme } from "../../constants";

export default function FDitem({ i, img, day, temp }: string | number | any) {
	return (
		<View
			key={i}
			className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
			style={{ backgroundColor: theme.bgWhite(0.15) }}
		>
			<Image source={img} className="w-11 h-11" />
			<Text className="text-white">{day}</Text>
			<Text className="text-white text-xl font-semibold">{temp}&#176;</Text>
		</View>
	);
}
