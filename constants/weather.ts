import axios from "axios";
import { apiKey, forecast, loc } from "./config";

const forecastEndpoint = (params: { cityName: any; days: any }) =>
		`${forecast}${apiKey}&q=${params.cityName}&days=${params.days}`,
	locationsEndpoint = (params: { cityName: any }) => `${loc}${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint: string) => {
	try {
		const response = await axios.request({ method: "GET", url: endpoint });
		return response.data;
	} catch (error) {
		console.log("error: ", error);
		return {};
	}
};

export const fetchWeatherForecast = (params: { cityName: any; days: string }) => apiCall(forecastEndpoint(params));
export const fetchLocations = (params: { cityName: any }) => apiCall(locationsEndpoint(params));
