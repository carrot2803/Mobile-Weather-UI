import { fetchLocations, fetchWeatherForecast, getData, storeData, weatherImages } from "../constants";
import { Load, Searchbtn, Forecast, FD, FDitem } from "../components";
import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapPinIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import { debounce } from "lodash";

export default function Home() {
	const [showSearch, toggleSearch] = useState(false);
	const [locations, setLocations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [weather, setWeather]: any = useState({});

	const handleSearch = (search: string | any[]) => {
		if (search && search.length > 2) fetchLocations({ cityName: search }).then((data) => setLocations(data));
	};

	const s = () => toggleSearch(!showSearch);

	const handleLocation = (loc: any) => {
		setLoading(true);
		toggleSearch(false);
		setLocations([]);
		fetchWeatherForecast({ cityName: loc.name, days: "7" }).then((data) => {
			setLoading(false), setWeather(data), storeData("city", loc.name);
		});
	};

	useEffect(() => {
		fetchMyWeatherData();
	}, []);

	const fetchMyWeatherData = async () => {
		let mc = await getData("city");
		let cityName = "Curepe";
		if (mc) cityName = mc;

		fetchWeatherForecast({ cityName, days: "7" }).then((data) => {
			setWeather(data);
			setLoading(false);
		});
	};

	const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []),
		{ location, current }: any = weather;

	return (
		<View className="flex-1 relative">
			<StatusBar style="light" />
			<Image blurRadius={70} source={require("../assets/images/bg.png")} className="absolute w-full h-full" />
			{loading ? (
				<Load />
			) : (
				<SafeAreaView className="flex flex-1">
					{/* search section */}
					<View style={{ height: "7%" }} className="mx-4 relative z-50">
						<Searchbtn show={showSearch} debounce={handleTextDebounce} toggle={s} />
						{locations.length > 0 && showSearch ? (
							<View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
								{locations.map((loc: any, index: number) => {
									let bc = index + 1 != locations.length ? " border-b-2 border-b-gray-400" : "";
									return (
										<TouchableOpacity
											key={index}
											onPress={() => handleLocation(loc)}
											className={"flex-row items-center border-0 p-3 px-4 mb-1 " + bc}
										>
											<MapPinIcon size="20" color="gray" />
											<Text className="text-black text-lg ml-2">
												{loc?.name}, {loc?.country}
											</Text>
										</TouchableOpacity>
									);
								})}
							</View>
						) : null}
					</View>

					<Forecast
						name={location?.name}
						country={location?.country}
						image={weatherImages[current?.condition?.text || "other"]}
						temp_c={current?.temp_c}
						cText={current?.condition?.text}
						wind={current?.wind_kph}
						humidity={current?.humidity}
						sunrise={weather?.forecast?.forecastday[0]?.astro?.sunrise}
					/>

					<FD>
						{weather?.forecast?.forecastday?.map((item: any, index: number) => {
							const date = new Date(item.date);
							let dayName = date.toLocaleDateString("en-US", { weekday: "long" }).split(",")[0];
							return (
								<FDitem
									i={index}
									img={weatherImages[item?.day?.condition?.text || "other"]}
									day={dayName}
									temp={item?.day?.avgtemp_c}
								/>
							);
						})}
					</FD>
				</SafeAreaView>
			)}
		</View>
	);
}
