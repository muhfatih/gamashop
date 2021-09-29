import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UserOnlyRoute = ({ children, redirect }) => {
	const { authState } = useAuth();
	const history = useHistory();

	useEffect(() => {
		if (authState !== 'user' && authState !== 'initial') {
			history.push(redirect);
		}
	}, [authState]);

	return <div>{authState === 'user' && children}</div>;
};

export default UserOnlyRoute;
