import React from "react";
import GuestOnlyRoute from "src/core/routeblocks/GuestOnlyRoute";

const Login = () => {
	return (
		<GuestOnlyRoute redirect="/dashboard">
			<div className="w-full bg-red-900">
				<div className="">askdj</div>
				<div>alskdj</div>
			</div>
		</GuestOnlyRoute>
	);
}

export default Login;
