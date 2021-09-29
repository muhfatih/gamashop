import React from "react";
import GuestOnlyRoute from './../core/routeblocks/GuestOnlyRoute';

const SignUp = () => {
  return  (
	<GuestOnlyRoute redirect="/dashboard">
		ini login
	</GuestOnlyRoute>
  );
}

export default SignUp;
