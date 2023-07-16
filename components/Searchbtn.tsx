import { View, TextInput, TouchableOpacity } from "react-native";
import { XMarkIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { theme } from "../constants";

type searchProps = { show: boolean; debounce: (search: string | any[]) => void; toggle: () => void };

export default function Searchbtn({ show, debounce, toggle }: searchProps) {
	return (
		<View
			className="flex-row justify-end items-center rounded-full"
			style={{ backgroundColor: show ? theme.bgWhite(0.2) : "transparent" }}
		>
			{show ? (
				<TextInput
					onChangeText={debounce}
					placeholder="Search city"
					placeholderTextColor={"lightgray"}
					className="pl-6 h-10 pb-1 flex-1 text-base text-white"
				/>
			) : null}
			<TouchableOpacity
				onPress={toggle}
				className="rounded-full p-3 m-1"
				style={{ backgroundColor: theme.bgWhite(0.3) }}
			>
				{show ? <XMarkIcon size="25" color="white" /> : <MagnifyingGlassIcon size="25" color="white" />}
			</TouchableOpacity>
		</View>
	);
}
