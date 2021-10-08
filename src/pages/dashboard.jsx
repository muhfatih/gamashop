import React from 'react'
import UserOnlyRoute from '../core/routeblocks/UserOnlyRoute'

const Dashboard = () => {
	return (
		<UserOnlyRoute redirect="/login">
			ini dashboard
		</UserOnlyRoute>
	)
}

export default Dashboard
