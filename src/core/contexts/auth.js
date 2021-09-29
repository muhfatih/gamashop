import { useState, useEffect } from 'react';

const LayoutStore = () => {
	const [status, setStatus] = useState('initial') // initial | user | guest

	const authMethods = {
		authenticate: () => {

		},
		login: (username, password) => {
			//success 
			setStatus('user')
			// fail
			setStatus('guest')
		},
		signup: (data) => {
			//success 
			setStatus('user')
			// fail
			setStatus('guest')
		},
		logout: () => {
			setStatus('guest')
		}
	}

	useEffect(() => {
		//masuk
		setStatus('guest')
	}, []);

	return {
		status,
		authMethods
	};
};

export default LayoutStore;
