import React from "react";
import GuestOnlyRoute from "src/core/routeblocks/GuestOnlyRoute";

const Login = () => {
  return (
	<GuestOnlyRoute redirect="/dashboard">
		ini login
	</GuestOnlyRoute>
  );
}

export default Login;
