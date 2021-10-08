import React from "react";
import GuestOnlyRoute from "src/core/routeblocks/GuestOnlyRoute";

const Login = () => {
	return (
		<GuestOnlyRoute redirect="/dashboard">
			<div className="flex-cc col w-full bg-red-400">
				<div className="w-32 bg-green-500">askdj</div>
				<div className="w-32 bg-black">alskdj</div>
			</div>
		</GuestOnlyRoute>
	);
}

export default Login;
