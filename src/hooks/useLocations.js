import { useState } from 'react';
import serverApi from '../api/serverApi';

export default () => {
	const [locations, setlocations] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const locationsApi = async () => {
		try {
			const response = await serverApi.get('/locations');
			setlocations(response.data);
			console.log('locationsresponse', response);
		} catch (error) {
			console.log('locationresponseErr', error);
			setErrorMessage(error);
		}
	};

	return { locations, locationsApi, errorMessage };
};
