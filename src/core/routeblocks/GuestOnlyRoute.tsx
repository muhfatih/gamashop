import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@core/redux/reducers/auth';
import LoaderScreen from '@components/_shared/LoaderScreen';

interface Props {
	children: React.ReactNode;
	redirect: string;
}

const GuestOnlyRoute = ({ children, redirect }: Props): JSX.Element => {
	const router = useRouter();
	const { authenticated } = useAuth();

	useEffect(() => {
		if (authenticated) {
			router.push(redirect);
		}
	}, [authenticated]);

	switch (authenticated) {
		case false:
			return <>{children}</>;
		case true:
			return <></>;
		default:
			return <LoaderScreen />;
	}
};

export default GuestOnlyRoute;
