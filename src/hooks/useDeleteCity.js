import { useState } from 'react';
import serverApi from '../api/serverApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify3 = () =>
	toast.success('City was successfully deleted!', {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: 0,
	});
const notify4 = () =>
	toast.error('City was not deleted!', {
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
	const [deleted, setdeleted] = useState(false);
	const deleteCityApi = async (id) => {
		setdeleted(false);
		try {
			const response = await serverApi.delete(`cities/${id}/`);
			setdeleted(true);
			notify3();
			console.log('deletecityResponse', response);
		} catch (error) {
			setdeleted(false);
			notify4();
			console.log('deletecityResponseErr', error);
			setErrorMessage(error);
		}
	};
	return { deleted, deleteCityApi, errorMessage };
};
