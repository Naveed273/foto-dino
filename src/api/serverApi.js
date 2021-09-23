import axios from 'axios';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
export default axios.create({
	baseURL: 'https://api.photodino.com/locations/',
});
