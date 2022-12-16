import axios from 'axios';

import { API_URL } from '../../../store/constants';

const signUp = ({ formData, setUser }) => {
	axios({
		method: 'POST',
		data: {
			username: formData.username,
			password: formData.password,
		},
		withCredentials: true,
		url: `${API_URL}/signup`,
	})
		.then((response) => {
			setUser(response.data);
		})
		.catch((error) => {
			console.log('error: ', error);
		});
};

export default signUp;
