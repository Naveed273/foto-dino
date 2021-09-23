import { useState } from 'react';
import serverApi from '../api/serverApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify1 = () =>
	toast.success('City was successfully added!', {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: 0,
	});
const notify2 = () =>
	toast.error('City was not added!', {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: 0,
	});

export default () => {
	const [errorMessage, setErrorMessage] = useState('');
	const addCityApi = async ({ id, name, code, locations }) => {
		try {
			const response = await serverApi.post('cities/', {
				id,
				name,
				code,
				locations,
				time_added: new Date(),
			});

			notify1();
			console.log('AddcityResponse', response);
		} catch (error) {
			notify2();
			console.log('AddcityResponseErr', error);
			setErrorMessage(error);
		}
	};
	return { addCityApi, errorMessage };
};
