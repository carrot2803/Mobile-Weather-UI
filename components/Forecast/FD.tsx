import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { View, Text, ScrollView } from "react-native";
import { ReactElement } from "react";

export default function FD(props: { children: string | number | boolean | ReactElement<any, string> }) {
	return (
		<View className="mb-2 space-y-3">
			<View className="flex-row items-center mx-5 space-x-2">
				<CalendarDaysIcon size="22" color="white" />
				<Text className="text-white text-base">Daily forecast</Text>
			</View>
			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				showsHorizontalScrollIndicator={false}
			>
				{props.children}
			</ScrollView>
		</View>
	);
}
