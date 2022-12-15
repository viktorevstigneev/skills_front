import axios from 'axios';

import { API_URL, API_HOST, API_KEY, LANGUAGES } from '../constants';
import { transformObjectToArray } from './dataAdapters/transformObjectToArray';

export const getCurrentUserApi = async (text, inputLanguage, outputLanguage) => {
	const response = await axios.get(`${API_URL}/profile`).then((response) => response.data)

	return response.data;
};

export const getLanguagesList = async () => {
	const options = {
		method: 'GET',
		url: `${API_URL}/languages`,
		params: { 'api-version': '3.0', scope: 'translation' },
		headers: {
			'X-RapidAPI-Key': API_KEY,
			'X-RapidAPI-Host': API_HOST,
		},
	};

	// await axios.request(options);
	// return response.data;
	const transformedData = transformObjectToArray(LANGUAGES);

	return transformedData;
};
