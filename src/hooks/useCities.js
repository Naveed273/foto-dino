import { useState } from 'react';
import serverApi from '../api/serverApi';

export default () => {
	const [cities, setcities] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const citiesApi = async () => {
		try {
			const response = await serverApi.get('/cities/');
			setcities(response.data);
			console.log('citiesresponse', response);
		} catch (error) {
			console.log('citiesresponseErr', error);
			setErrorMessage(error);
		}
	};

	return { cities, citiesApi, errorMessage };
};
